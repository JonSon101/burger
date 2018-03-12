var connection = require('../config/connection.js');

var orm = {
    selectAll: function(cb) {
        //console.log("orm-selectAll");
        var queryString = "SELECT * FROM burgers";
        //console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //console.log("orm-result", result);
            cb(result);
        });
    },
    insertOne: function(burgerName, cb) {
        //console.log("orm-insertOne");
        //console.log("burgerName: ", burgerName);
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        //console.log(queryString);
        connection.query(queryString, burgerName, function(err, results) {
            //console.log("inside connection:", burgerName);
            if (err) {
                throw err;
            }
            //console.log("orm-result", results);
            cb(results);
        });
    },
    updateOne: function(burgerID, cb) {
        console.log("orm-updateOne");
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
        queryString += Number(burgerID);
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log("orm-results", result);
            cb(result);
        });
    },
    delete: function(burgerID, cb) {
        var queryString = "DELETE FROM burgers WHERE id = ";
        queryString += Number(burgerID);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;

