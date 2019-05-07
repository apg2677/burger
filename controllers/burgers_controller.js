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
    var name = req.body.name;
    var devoured = req.body.devoured;
    burger.insertOne(name, devoured, function(result) {
        res.json({id: result.insertId});
    })
});

router.post("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    var dev = req.body;
    console.log(dev);
    burger.updateOne({
      dev
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;