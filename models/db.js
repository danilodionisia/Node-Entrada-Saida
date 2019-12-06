const Sequelize = require('sequelize');

const sequelize = new Sequelize('entrada-saida', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}