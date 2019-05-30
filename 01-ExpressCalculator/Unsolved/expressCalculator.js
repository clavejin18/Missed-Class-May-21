// Dependencies
//Use npm init --yes to create a package.json file. run npm express to download package.
const express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Create express app instance.
const app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/", function (req, res) {
  // Creating html document
  let html = `<!DOCTYPE html>
  <html>
    <body>
  <div>
          <h2>Instructions:</h2>
          Use the following format: ${req.protocol}://${req.hostname}:${PORT}/<b>operation</b>/<i>first number/i>/<i>second number</i>
        <hr />
        operations:
        <ul>
        <li> "add" or "+" </li>
        <li> "subtract", "sub" or "-" </li>
        <li> "multiply", "mul" or "*" </li>
        <li> "divide", "div" or "/" </li>
      </div>
  
  </body>
  </html>`
  //sending response to html and displays it on screen
  res.send(html)
});
app.get('/:operation/:num1/:num2', function (req, res) {
  // Parameters from URL
  let operation = req.params.operation;
  // variables needed for calaculator
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
    case "+":
      result = num1 + num2
      break;
    case "subtract":
    case "sub":
    case "-":
      result = num1 - num2
      break;
    case "multiply":
    case "mult":
    case "*":
      result = num1 * num2
      break;
    case "divide":
    case "div":
    case "/":
      if (num2 === 0) {
      result = 'Undefined, you cannot divide by zero!';
      }
      else {
        result = num1/num2
      }
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
