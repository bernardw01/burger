var express = require('expresss');

var burger = require('../models/burger');

var router = express.Router();

// Import the model (cat.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.getBurgers(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(
        req.body.burger_name, req.body.devoured, req.body.date,
        function () {
            res.redirect("/");
        });
});

router.post("/update", function (req, res) {
    var burger_id = "id = " + req.body.id;

    console.log("Burger ID: ", burger_id);

    burger.updateBurger(
        req.body.id,
        req.body.burger_name,
        req.body.devoured,
        req.body.date,
        function () {
            res.redirect("/");
        });
});

// Export routes for server.js to use.
module.exports = router;