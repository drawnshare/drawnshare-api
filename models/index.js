var sequelize = require('./sequelize');

//sequelize.sync();
//
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


module.exports = {
    sequelize : sequelize
};
