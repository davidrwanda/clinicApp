const  Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Patient = sequelize.define('patient', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    patName: {
             type: Sequelize.STRING,
             allowNull: false
    },
    patBdate: {
        type: Sequelize.DATE,
        allowNull:false
    },
    patNationality: {
        type:Sequelize.STRING,
        allowNull: false
    },
    patIdNo : {
         type: Sequelize.STRING,
         allowNull: true
    },
    patPassportNo : {
        type: Sequelize.STRING,
        allowNull: true
    },
    patCountry: {
        type: Sequelize.STRING,
        allowNull: false
    },
    patDistrict: {
        type: Sequelize.STRING,
    },
    patSector: {
        type:Sequelize.STRING
    },
    patCell: {
        type: Sequelize.STRING
    },
    patVillage: {
        type: Sequelize.STRING
    }

});

module.exports = Patient;