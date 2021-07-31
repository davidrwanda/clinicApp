const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const stockBranch = sequelize.define('stockbranch', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    branchName: {
        type: Sequelize.STRING
    },
    branchLocation: {
        type: Sequelize.STRING
    }
});

module.exports = stockBranch;
