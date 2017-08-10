var mysql = require('mysql');

var DataLayer = function () {

    this.connection = mysql.createConnection(({
        host: 'te2sow.cciiqdjd26sf.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'maria',
        password: '12Password34',
        database: 'bamazon'
    }));

    this.connection.connect(function (err) {
        if (err) throw err;

    });
    var connection = this.connection;

    this.getMatches = function (searchObj, callback) {

    };

    this.getProductByID = function (prodID) {
        var products = [];
        this.connection.query({
                sql: "SELECT ID, short_name, unit_price, department FROM products where ID = ?",
                values: [prodID]
            },
            function (err, res) {
                if (err) throw err;
                // instantiate

                for (var i = 0; i < res.length; i++) {
                    products.push({
                        id: res[i].ID,
                        short_name: res[i].short_name,
                        unit_price: res[i].unit_price,
                        department: res[i].department
                    })

                }
                console.log(JSON.stringify(products));
                return products;

            });

    };


    this.close = function () {
        this.connection.end(function () {
            console.log('---------- Connection closed --------');
        });
    }

    this.getConnection = function (){

        return this.connection;
    }
};

module.exports = DataLayer;