const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ordonance = sequelize.define('ordonance', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
         type: Sequelize.INTEGER
    },
    branchName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'KIGALI'
    }
   
});

module.exports = ordonance;
 