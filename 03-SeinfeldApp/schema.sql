-- Creating database for app
CREATE DATABASE IF NOT EXISTS How_I_Meet_Your_Mother;
-- Using database
Use How_I_Meet_Your_Mother;

-- Creating table 
CREATE TABLE IF NOT EXISTS HIMYMCast (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  attitude varchar(60) NOT NULL,
  PRIMARY KEY(id)
);
-- Inserting values into the table
INSERT INTO HIMYMCast (name, coolness_points, attitude) VALUES ("Ted Mosby", 100, "The optimist");
INSERT INTO HIMYMCast (name, coolness_points, attitude) VALUES ("Barney Stinson", 110, "Womanizer");
INSERT INTO HIMYMCast (name, coolness_points, attitude) VALUES ("Robin Scherbatsky", 100, "News anchor");
INSERT INTO HIMYMCast (name, coolness_points, attitude) VALUES ("Marshall Eriksen", 100, "Environmental lawyer");
INSERT INTO HIMYMCast (name, coolness_points, attitude) VALUES ("Lily Aldrin", 100 , "School teacher");