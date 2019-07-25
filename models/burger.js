let orm = require("../config/orm");

// create code that will call the ORM functions using burger specific input for the ORM
let burger = {
    selectAll: function (callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    insertOne: function (name, callback) {
        orm.insertOne(name, function(res) {
            callback(res);
        });
    },
    updateOne: function(name, newname, callback) {
        orm.updateOne(name, newname, function(res) {
            callback(res);
        });
    }
}


module.exports = burger;