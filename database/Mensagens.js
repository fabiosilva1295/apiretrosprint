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
    },
    squad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sprint: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sm: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

Mensagem.sync({force: false})

module.exports = Mensagem;