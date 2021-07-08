const Sequelize = require('sequelize');

const sequelize = new Sequelize('clinicApp', 'postgres', 'David@250',{
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = sequelize;

