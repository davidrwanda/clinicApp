const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const basicExam = sequelize.define('basicExam', {
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
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
});

module.exports = basicExam;