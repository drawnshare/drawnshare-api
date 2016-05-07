/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Task = require('./Task');
var User = require('./User');

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
 * Defininf relations between models
 */
User.hasMany(Task);
Task.belongsTo(User);

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
    Task : Task,
    User : User
};

