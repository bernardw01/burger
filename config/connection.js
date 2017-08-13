var mysql = require('mysql');

var DataLayer = function () {

    this.connection = mysql.createConnection(({
        host: 'te2sow.cciiqdjd26sf.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'maria',
        password: '12Password34',
        database: 'bamazon',
        debug: true
    }));

    this.connection.connect(function (err) {
        if (err) throw err;

    });
    var connection = this.connection;



    this.getConnection = function (){

        return this.connection;
    }
};

module.exports = DataLayer;