/*
 * Dependencies
 */
var Sequelize = require('sequelize');

/*
 * Exporting database connection
 */ 
module.exports = new Sequelize('drawnshare', 'root', 'toor', {
    host: '127.0.0.1',
    dialect: 'mariadb',
    port: 3306
});

