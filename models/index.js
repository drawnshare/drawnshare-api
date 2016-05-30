/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Task = require('./Task');
var User = require('./User');
var Project = require('./Project');

/*
 * Database testing
 */
sequelize.validate().then(function(err) {
    if(err) {
        console.warn(err)
    } else {
        console.info('Sequelize connected successfully to the database.')
    }
});

/*
 * Defining relations between models
 */
User.hasMany(Task);
Task.belongsTo(User);

User.belongsToMany(Project, {through: 'ProjectUser'});
Project.belongsToMany(User, {through: 'ProjectUser'});

Project.hasMany(Task, {foreignKey: {allowNull: false}});
Task.belongsTo(Project, {foreignKey: {allowNull: false}});

/*
 * Syncing database
 */
console.info('Syncing database.');
sequelize.sync();

/*
 * Exporting all models
 */
module.exports = {
    sequelize : sequelize,
    Task: Task,
    User: User,
    Project: Project
};

