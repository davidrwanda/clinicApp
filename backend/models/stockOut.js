const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const stockOut = sequelize.define('stockout', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    cost: {
         type: Sequelize.INTEGER
    },
    branchName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'KIGALI'
    }
   
});

module.exports =stockOut;
 