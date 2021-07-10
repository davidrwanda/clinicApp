const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const medecin = sequelize.define('medecin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    origin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    openingStock: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = medecin;