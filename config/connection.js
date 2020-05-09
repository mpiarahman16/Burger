// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.JAWS_HOST ||"localhost",
  port: 3306, 
  user: process.env.JAWS_USERNAME||"PiaRahman",
  password: process.env.JAWS_PASSWORD||"NewPassword!",
  database: process.env.JAWS_DATABASE ||"burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;