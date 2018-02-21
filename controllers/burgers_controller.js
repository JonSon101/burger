var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    //console.log("burgers_controller-router.get");
    burger.getBurgers(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console.log("burgers_controller-hbsObject", hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    //console.log("burgers_controller-router.post");
    burger.addBurger(["name"], [req.body.name], function(result) {

        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    //console.log("burgers_controller-router.put");
    burger.devourBurger(req.params.id, function(result) {
        if (result.changedRows === 0 ) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;