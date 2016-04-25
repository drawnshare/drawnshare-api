/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize'); //Sequelize is necessary to get the datatypes

/*
 * Defining model and relations
 */
var Task = sequelize.define('task', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    } 
});

/*
 * Exporting model
 */
module.exports = Task;
