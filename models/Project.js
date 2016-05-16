/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Sequelize = require('sequelize'); //Sequelize is necessary to get the datatypes

/*
 * Defining model
 */
var Project = sequelize.define('project', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Exporting Model
module.exports = Project;
