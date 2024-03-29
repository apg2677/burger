var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(n, d, cb ) {
        orm.insertOne(n,d, function(res) {
            cb(res);
        });
    },
    updateOne: function(dev, condition, cb) {
        orm.updateOne( dev, condition, function(res) {
            cb(res);
        });
    }

}

module.exports = burger;