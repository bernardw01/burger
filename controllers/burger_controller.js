var express = require('express');

var burger = require('../models/burger');

var router = express.Router();

var myBurg = new burger();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    myBurg.getBurgers(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    myBurg.insertBurger(
        req.body.burger_name, req.body.devoured, req.body.date,
        function () {
            res.redirect("/");
        });
});

router.post("/update", function (req, res) {
    var burger_id = "id = " + req.body.burger_id;

    console.log("Burger ID: ", burger_id);

    myBurg.updateBurger(
        req.body.burger_id,
        req.body.devoured,
        function (SQLResp) {
            res.redirect("/");
            console.log('-------- SQL Results: ' + JSON.stringify(SQLResp, null, 2));
        });
});

// Export routes for server.js to use.
module.exports = router;