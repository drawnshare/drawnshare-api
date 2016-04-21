/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize'); //Sequelize is necessary to get the datatypes

/*
 * Defining model and relations
 */
var Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
});

/*
 * Exporting model
 */
module.exports = Task;
