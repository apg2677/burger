
var mysql = require("mysql");
require("dotenv").config();


var connection; 
if(process.env.JAWSDB_PASS) {
  connection = mysql.createConnection({
    host:"mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port:3306,
    user:"mzknslb697x18ll8",
    password:process.env.JAWSDB_PASS,
    database:"cc7d2g7x09xvyrdn"

  });


}
else {
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
  
}

// Make connection.4
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
 
});

// Export connection for our ORM to use.
module.exports = connection;
