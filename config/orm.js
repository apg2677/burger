var connection = require("../config/connection.js");

var orm = {
    selectAll:function(table, cb) {
        var queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
            
        });
    },
    insertOne:function(name, devoured, cb) {
        var table = "burgers";
        var col1 = "burger_name";
        var col2 = "devoured";

        var queryStr = "INSERT INTO " + table + "(";
        queryStr += col1 + "," + col2 + ")";
        queryStr += " Values('" + name + "', " + "'" + devoured + "');";
        console.log(queryStr);  
        connection.query(queryStr, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(dev, condition, cb) {
        var table = "burgers";
       // console.log("dev: " + JSON.stringify(dev));
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured = " + parseInt(dev.dev);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    }
   




module.exports = orm;
