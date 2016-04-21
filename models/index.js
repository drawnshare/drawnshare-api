/*
 * Dependencies
 */
var sequelize = require('./sequelize');
var Task = require('./Task');

/*
 * Database testing
 */
sequelize.validate().then(function(err) {
    if(err) {
        console.info(err)
    } else {
        console.info('Sequelize connected successfully to the database.')
    }
});

/*
 * Syncing database
 */
sequelize.sync();

/*
 * Exporting all models
 */
module.exports = {
    sequelize : sequelize,
    Task : Task
};
