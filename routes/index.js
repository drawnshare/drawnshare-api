/*
 * Dependencies
 */
var express = require('express');
var router = express.Router();

/*
 * Requiring each router
 */
var tasks = require('./tasks');
var users = require('./users');
var projects = require('./projects');

router.use('/tasks', tasks);
router.use('/users', users);
router.use('/projects', projects);

/*
 * Exporting the routers
 */
module.exports = router;


