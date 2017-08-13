var orm = require('../config/orm');

var burger = function () {

   this.getBurgers = function (callback) {
        orm.selectAll('burgers',
            function (res) {
                console.log('------Got dem burgers');
                console.log(res);
                callback(res);

            });
    }

    this.insertBurger = function (burger_name, devoured, date, callback) {

        var burgerObj = {
            burger_name: burger_name,
            devoured: devoured,
            date: date
        }
        orm.insertOne(burgerObj,
            function (res) {
                console.log('------Got dem burgers');
                console.log(res);
                callback(res);
            });
    }

    this.updateBurger = function (id, devoured, callback) {

        var burgerObj = {
            id: id,
            devoured: devoured
        }
        orm.updateOne(burgerObj,
            function (res) {
                console.log('------ Update one response');
                console.log(res);
                callback(res);

            });
    }
}

module.exports = burger;