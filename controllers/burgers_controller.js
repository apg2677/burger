var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    
});

router.post("/api/burgers", function(req,res) {
    var name = req.body.bn;
    var devoured = req.body.devoured;
    burger.insertOne(name, devoured, function(result) {
        res.json({id: result.insertId});
    })
});

module.exports = router;