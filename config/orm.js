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
    }
   

}


module.exports = orm;
