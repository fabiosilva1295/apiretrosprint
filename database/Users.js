const Sequelize = require('sequelize');
const connection = require('./connection')

const Users = connection.define('users', {
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primarykey: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    squad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Users.sync({force: false});

module.exports = Users;