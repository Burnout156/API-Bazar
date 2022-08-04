const Sequelize = require('sequelize');

// const connection = new Sequelize("bazardb", "root", "root", {
//         host: 'localhost',
//         dialect: 'mysql'
// });

const connection = new Sequelize("bazardb", "root", "root", { //conexão com o container do mysql no docker
        host: '',
        dialect: 'mysql'
});

connection.query(
        `CREATE DATABASE IF NOT EXISTS bazardb`,
        function (err, results) {
          console.log(results);
          console.log(err);
        }
      );

connection.query(
        `CREATE TABLE IF NOT EXISTS produtos(
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR (150) NOT NULL,
                descricao VARCHAR (250) NOT NULL,
                preco DOUBLE NOT NULL,
                dataCriacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                ultimaAtualizacao DATETIME NULL DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=INNODB;`,
        function (err, results) {
                console.log(results);
                console.log(err);
        }
        );

module.exports = connection;