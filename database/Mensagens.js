const Sequelize = require('sequelize');
const connection = require('./connection');

const Mensagem = connection.define('mensagens', {
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Mensagem.sync({force: false})

module.exports = Mensagem;