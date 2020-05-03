CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(

id int AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured bool DEFAULT FALSE,
PRIMARY KEY (id)
);
