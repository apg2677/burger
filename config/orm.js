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
    insertOne:function(name, devoured) {
        var table = "burgers";
        var col1 = "burger_name";
        var col2 = "devoured";

        var queryStr = "INSERT INTO " = table + "(";
        queryStr += col1 + "," + col2 + ")";
        queryStr += " Values(" + name + ", " + devored + ");";
        console.log(queryStr);  
    }
   

}


module.exports = orm;
