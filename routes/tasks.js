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

/**
 * All routes and middleware for /tasks
 */

/**
 * @api {get} /tasks Request all tasks
 * @apiName GetTasks
 * @apiGroup Task
 *
 * @apiSuccess {Object[]} tasks
 * @apiSuccess {Number} tasks.id Id of the task
 * @apiSuccess {String} tasks.title The title of the task
 * @apiSuccess {String} tasks.description The task's description
 * @apiSuccess {Date} tasks.createdAt The creation date
 * @apiSuccess {Date} tasks.updatedAt The date the tasks was last updated
 */
router.get('/', function(req, res) {
    Task.findAll()
    .then(function(tasks) {
        res.send(tasks);
    })
    .catch(function(err){
        res.send(err);
    })
})

/**
 * @api {post} /tasks Create a new Task
 * @apiName CreateTask
 * @apiGroup Task
 *
 * @apiParam {String} title The title of the task
 * @apiParam {String} description A short description of the task
 * @apiParam {Number} projectId The id of the projects the task is part of
 * @apiParam {Number} [userId] Optional id of the user in charge of the task
 *
 * @apiSuccess {String} success A short message "Task added successfuly."
 * @apiSuccess {Object} task Task informations
 * @apiSuccess {Number} task.id Id of the task
 * @apiSuccess {String} task.title The title of the task
 * @apiSuccess {String} task.description The task's description
 * @apiSuccess {Date} task.createdAt The creation date
 * @apiSuccess {Date} task.updatedAt The date the tasks was last updated
 */
.post('/', function(req, res) {
    Task.create({
        title: req.body.title,
        description: req.body.description,
        projectId: req.body.projectId
    })
    .then(function(task) {
        res.send({success: "Task added successfuly.", task});
    })
    .catch(function(err) {
        res.send(err);
    })
})

/**
 * @api {get} /tasks/:id Get a single task
 * @apiName GetTask
 * @apiGroup Task
 *
 * @apiParam {Number} id The id of the desired task
 *
 * @apiSuccess {Object} task Task informations
 * @apiSuccess {Number} task.id Id of the task
 * @apiSuccess {String} task.title The title of the task
 * @apiSuccess {String} task.description The task's description
 * @apiSuccess {Date} task.createdAt The creation date
 * @apiSuccess {Date} task.updatedAt The date the tasks was last updated
 */
.get('/:id', function(req, res){
    Task.findById(req.params.id)
    .then(function(task) {
        if(task){
            res.send(task);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err) {
        res.send(err)
    })
})

/**
 * @api {put} /tasks/:id Change a tasks informations
 * @apiName SetTask
 * @apiGroup Task
 *
 * @apiParam {Number} id The id of the task to update
 *
 * @apiSuccess {String} success A short message saying "Task updated successfuly."
 */
.put('/:id', function(req, res) {
    Task.findById(req.params.id)
    .then(function(task) {
        if(task) {
            task.update(req.body)
            .then(function(){
                res.send({success: "Task updated successfuly."});
            })
            .catch(function(err){
                res.send(err);
            })
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err) {
        res.send(err);
    })
})

/**
 * @api {put} /tasks/:id/users Assign a user to a task
 * @apiName SetTaskUser
 * @apiGroup Task
 *
 * @apiParam {Number} id The task's id
 *
 * @apiParam {Number} userId The user's id
 *
 * @apiSuccess {String} success A short message saying "User assigned successfully"
 */
.put('/:id/users', function(req, res){
    Task.findById(req.params.id)
    .then(function(task){
        if(task) {
            task.setUser(req.body.userId)
            .then(function(){
                res.send({success: "User assigned successfully"});
            })
            .catch(function(err){
                res.send(err);
            })
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err){
        res.send(err);
    })
})

/**
 * @api {delete} /tasks/:id Delete a task
 * @apiName RemoveTask
 * @apiGroup Task
 *
 * @apiParam {Number} id The id of the task to delete
 *
 * @apiSuccess {String} success A short message saying "Task updated successfuly."
 */
.delete('/:id', function(req, res) {
    Task.findById(req.params.id)
    .then(function(task) {
        if(task) {
            task.destroy()
            .then(function(rows){
                res.send({success: "Task deleted successfuly."});
            })
            .catch(function(err){
                res.send(err);
            })
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err) {
        res.send(err);
    })
})

//Exporting router
module.exports = router;
