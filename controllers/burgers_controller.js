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

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertID})
    })
});

router.put("/api/burger/:id", function(req, res) {
    let id = req.params.id
    burger.updateOne({
        burger_name = req.body.name
    })
    return res.status(200).end();
})

// export route tables
module.exports = router