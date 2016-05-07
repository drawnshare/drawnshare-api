/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize'); //Sequelize is necessary to get the datatypes

/*
 * Defining model
 */
var User = sequelize.define('user', {
    pseudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.TEXT,
});

 //Exporting model
 module.exports = User;
