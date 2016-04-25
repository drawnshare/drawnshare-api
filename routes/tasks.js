/*
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/*
 * Getting the task model
 */
var Task = models.Task

/*
 * All routes and middleware for /tasks
 */
router.get('/', function(req, res) {
    Task.findAll()
        .then(function(tasks) {
            res.send(tasks)
        })
        .catch(function(err){
            res.send(err)
        });
})

.post('/', function(req, res) {
    var task = Task.build({
        title: req.body.title,
        description: req.body.description
    });
    task.save().then(function() {
        res.send("Task added succesfuly.");
    })
    .catch(function(err) {
        res.send(err)
    });
})

.get('/:id', function(req, res){
    Task.findById(req.params.id)
        .then(function(task) {
            res.send(task)
        })
        .catch(function(err) {
            res.send(err)
        })
})

.put('/:id', function(req, res) {
    Task.findById(req.params.id)
        .then(function(task) {
            task.update(req.body);
            res.send("Task updated successfuly")
        })
        .catch(function(err) {
            res.send(err)
        })
})

/*
 * Exporting router
 */
module.exports = router;
