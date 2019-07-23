let connection = require("./connection")

let orm = {
    selectAll: function() {
        let query = "SELECT * FROM burgers_db";
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(name) {
        let query = "INSERT INTO burgers_db (burger_name) VALUES (?)";
        connection.query(query, [name], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function() {

    }
}

module.exports = orm;