CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(80),
    devoured TINYINT(1) DEFAULT 0,
    PRIMARY KEY (id)
);