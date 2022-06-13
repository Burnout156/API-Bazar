// const mysql = require('mysql2');

// var pool = mysql.createPool({
//     "user" : process.env.MYSQL_USER,
//     "password" : process.env.MYSQL_PASSWORD,
//     "database" : process.env.MYSQL_DATABASE,
//     "host" : process.env.MYSQL_HOST,
//     "port" : process.env.MYSQL_PORT
// })

// exports.pool = pool;  

const Sequelize = require('sequelize');

const connection = new Sequelize("register", "root", "root", {
        host: 'localhost',
        dialect: 'mysql'
});

module.exports = connection;

// "MYSQL_USER" : "root",
// "MYSQL_PASSWORD" : "root",
// "MYSQL_DATABASE" : "bazardb",
// "MYSQL_HOST" : "localhost",
// "MYSQL_PORT" : 3306