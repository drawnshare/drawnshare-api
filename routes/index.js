/*
 * Requiring each router
 */
var tasks = require('./tasks');

/*
 * Exporting the routers
 */
module.exports = function(app) {
    tasks : app.use('/tasks', tasks)
};
