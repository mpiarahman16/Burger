#README

Create a GitHub called Burger.

Run npm init to install package.json.

Run npm install express` to install express.

Create a server.js file.

Run npm install express-handlebars to install Handlebars.

Run npm install mysql to install MySQL. 

For SQL:

Create schema.sql:

Create burgers_db.

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(

id int AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured bool DEFAULT FALSE,
PRIMARY KEY (id)
);

Create seed.sql:

INSERT INTO burgers (burger_name) VALUES ("CheeseBurger");
INSERT INTO burgers (burger_name) VALUES ("PickleCheeseBurger");
INSERT INTO burgers (burger_name) VALUES ("OnionCheeseBurger");

Make a db folder

Run schema.sql and seeds.sql.

Create config folder.

Create connection.js in config.

Create orm.js inside config.

Inside orm.js include:

`selectAll()`
`insertOne()`
`updateOne()`

Create models folder.

Create burger.js inside models.

Inside burger create a folder for controllers.

Inside controllers create burgers_controller.js.

Inside burger, create a folder for views.

Create index.handlebars` file in views.

Create layouts inside views.

Create the main.handlebars inside layouts.

Setup main.handlebars to be used by Handlebars.

Create a button in index.handlebars to submit the user input.




