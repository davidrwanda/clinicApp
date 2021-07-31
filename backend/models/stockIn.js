const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const stockIn = sequelize.define('stockin', {
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
    manufacturedDate: {
        type: Sequelize.DATE,
    },
    expiredDate: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    userManual: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status : {
        type: Sequelize.STRING
    }

});

module.exports =stockIn;
 