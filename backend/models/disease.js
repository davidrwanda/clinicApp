const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const disease = sequelize.define('disease', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
});

module.exports = disease;