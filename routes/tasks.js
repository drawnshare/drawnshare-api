/*
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/*
 * All routes and middleware for /tasks
 */
router.get('/', function(req, res) {
    console.info('greetings!');
    res.end();
});

/*
 * Exporting router
 */
module.exports = router;
