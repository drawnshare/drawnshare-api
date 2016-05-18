/*
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/*
 * Getting needed models
 */
var Task = models.Task;
var Project = models.Project;

/**
 * All routes and middleware for /tasks
 * @api {get} /tasks Request all tasks
 * @apiName GetTasks
 * @apiGroup Task
 *
 * @apiSuccess {Number} id Id of the task
 * @apiSuccess {String} title The title of the task
 * @apiSuccess {String} description The task's description
 * @apiSuccess {Date} createdAt The creation date
 * @apiSuccess {Date} updatedAt The date the tasks was last updated
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
    Project.findById(req.body.projectId)
    .then(function(project){
        project.createTask({
            title: req.body.title,
            description: req.body.description
        })
    res.send("Task added successfuly.");
    })
    .catch(function(err) {
        res.send(err)
    })
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
        res.send("Task updated successfuly.")
    })
    .catch(function(err) {
        res.send(err)
    })
})

.delete('/:id', function(req, res) {
    Task.findById(req.params.id)
    .then(function(task) {
        task.destroy();
        res.send("Task deleted successfuly.")
    })
    .catch(function(err) {
        console.log('error');
        res.send(err)
    })
})

//Exporting router
module.exports = router;
