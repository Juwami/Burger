let connection = require("./connection")

let orm = {
    selectAll: function(cb) {
        let query = "SELECT * FROM burgers";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(name, cb) {
        let query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, [name], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(name, id, cb) {
        let query = "UPDATE burger SET burger_name = ? WHERE id = ?";
        connection.query(query, [name, id], function(err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;