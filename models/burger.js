var orm = require('../config/orm.js');

var burger = {
    getBurgers: function(cb) {
        //console.log("burger-getBurger");
        orm.selectAll(function(res) {
            //console.log("burger-res", res);
            cb(res);
        });
    },
    addBurger: function(burgerName, cb) {
        //console.log("burger-addBurger");
        //console.log("burgerName: ", burgerName);
        orm.insertOne(burgerName, function(res) {
            //console.log("burger-res", res);
            cb(res);
        });
    },
    devourBurger: function(burgerID, cb) {
        console.log("burger-devourBurger");
        orm.updateOne(burgerID, function(res) {
            console.log("burger-res", res);
            cb(res);
        });
    },
    delete: function(burgerID, cb) {
        orm.delete(burgerID, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;