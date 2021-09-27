const Sequelize = require('sequelize');
const connection = new Sequelize('retrosprint', 'root', 'naruto5997', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;