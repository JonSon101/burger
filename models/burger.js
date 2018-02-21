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
        orm.insertOne(burgerName, function(res) {
            //console.log("burger-res", res);
            cb(res);
        });
    },
    devourBurger: function(burgerID, cb) {
        //console.log("burger-devourBurger");
        orm.updateOne(burgerID, function(res) {
            //console.log("burger-res", res);
            cb(res);
        });
    }
};

module.exports = burger;