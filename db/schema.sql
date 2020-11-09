-- Create the "burger_db" Database
CREATE DATABASE burger_db;

-- Put the db to use
USE burger_db;

-- Created the table "burger"
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(100) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY(id)
);

