var dataLayer = require('./connection');

var dl = new dataLayer();
var connection = dl.getConnection();

var orm = {

    selectAll: function (tableName, callback) {
        connection.query({
                sql: "SELECT * FROM ??",
                values: [tableName]
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    },
    insertOne: function (burgerObj, callback) {
        connection.query({
                sql: "insert into burgers set ?",
                values: burgerObj
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    },
    updateOne: function (burgerObj, callback) {
        console.log("Burger Obj: " + JSON.stringify(burgerObj,null, 2));
        connection.query({
                sql: "update burgers set devoured = ? where id = ?",
                values: [
                    parseInt(burgerObj.devoured),
                    parseInt(burgerObj.id)
                ]
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    }

};

module.exports = orm;