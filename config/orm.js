var dl = require('./connection');

var connection = new dl();

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
        connection.query({
                sql: "update burgers set burger_name = ?,  devoured = ?, date = ? where id = ?",
                values: [
                    burgerObj.burger_name,
                    burgerObj.devoured,
                    burgerObj.date,
                    burgerObj.id]
            },
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    }

}

