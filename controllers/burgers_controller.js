// require express
let express = require("express");
// creat variable route for express
let router = express.Router();
// require burger from models
let burger = require("../models/burger");

// create route tables with express

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

    })
})

router.get("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertID})
    })
});

router.put("/api/burger/:id", function(req, res) {
    
})

// export route tables
module.exports = router