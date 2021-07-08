const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
       type: Sequelize.STRING,
       allowNull: false 
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    qualification: {
        type: Sequelize.STRING,
       allowNull: false 
    },
    password: {
        type: Sequelize.STRING,
       allowNull: false 
    }
});

module.exports = User;