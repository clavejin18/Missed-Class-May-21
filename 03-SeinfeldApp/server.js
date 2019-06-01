// Required Dependencies
var express = require('express');
var mysql = require('mysql');

// Setting up express app
var app = express();

// Setting port of application using Heroku
var PORT = process.env.PORT || 8090;

// Setting up MySQL DB connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'node_user',
    password: '',
    database: 'How_I_Meet_Your_Mother'
  });
  // Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }
    console.log('connected as id ' + connection.threadId)
  });
  // Setting up routes
app.get('/HIMYMCast', function (req, res) {
    connection.query('SELECT * FROM HIMYMCast order by id', function (err, result) {
      if (err) throw err
      var html = '<h1> How I Met Your Mother cast ordered by ID</h1>'
  
      html += '<ul>'
  
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>'
        html += '<p> Name: ' + result[i].name + '</p>'
        html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>'
        html += '<p>Attitude: ' + result[i].attitude + '</p></li>'
      }
  
      html += '</ul>'
  
      res.send(html)
    })
  })
  
  app.get('/coolness-chart', function (req, res) {
    connection.query('SELECT * FROM HIMYMCast order by coolness_points DESC', function (err, result) {
      if (err) throw err
      var html = '<h1>How I Met Your Mother cast ordered by coolness</h1>'
  
      html += '<ul>'
  
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>'
        html += '<p> Name: ' + result[i].name + '</p>'
        html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>'
        html += '<p>Attitude: ' + result[i].attitude + '</p></li>'
      }
  
      html += '</ul>'
  
      res.send(html)
    })
  })
  
  app.get('/attitude-chart/:att', function (req, res) {
    console.log(req.params.att)
    connection.query('SELECT * FROM HIMYMCast where attitude = ?', [req.params.att], function (err, result) {
      if (err) throw err
      var html = '<h1>How I Met Your Mother cast with an attitude of ' + req.params.att + '</h1>'
  
      html += '<ul>'
  
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>'
        html += '<p> Name: ' + result[i].name + '</p>'
        html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>'
        html += '<p>Attitude: ' + result[i].attitude + '</p></li>'
      }
  
      html += '</ul>'
  
      res.send(html)
    })
  })
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT)
  })
  

