let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",

    port: process.env.PORT || 3306

    user: "root",

    password: "root"

    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected via ID:", connection.threadId)
})

module.exports = connection