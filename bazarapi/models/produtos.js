const Sequelize = require('sequelize');
const database = require('./database');

const Produto = database.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ultimaAtualizacao: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Produto;