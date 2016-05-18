/*
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/*
 * Getting needed models
 */
var Project = models.Project;
var Task = models.Task;

/**
 * All routes and middleware for /projects
 * @api {get} /projects Request all projects
 * @apiName GetProject
 * @apiGroup Project
 *
 * @apiSuccess {Number} id Id of the project
 * @apiSuccess {String} title The title of the project
 * @apiSuccess {String} description The description of the project
 * @apiSuccess {Date} createdAt The project's creation date
 * @apiSuccess {Date} updatedAt The date for the last time the projects was updated
 */
router.get('/', function(req, res) {
    Project.findAll()
    .then(function(projects) {
        res.send(projects)
    })
    .catch(function(err) {
        res.send(err)
    })
})

.post('/', function(req, res) {
    var project = Project.build({
        title: req.body.title,
        description: req.body.description
    })
    project.save()
    .then(function() {
        res.send("Project added successfuly.")
    })
    .catch(function(err){
        res.send(err)
    })
})

.get('/:id', function(req, res) {
    Project.findById(req.params.id)
    .then(function(project){
        res.send(project)
    })
    .catch(function(err){
        res.send(err)
    })
})

.get('/:id/tasks', function(req, res){
    Project.findById(req.params.id)
    .then(function(project){
        project.getTasks()
        .then(function(tasks){
            res.send(tasks)
        })
    })
    .catch(function(err){
        res.send(err)
    })
})

.put('/:id', function(req, res){
    Project.findById(req.params.id)
    .then(function(user){
        project.update(req.body);
        res.send("Project updated successfully.");
    })
    .catch(function(err){
        res.send(err)
    })
})

.delete('/:id', function(req, res){
    Project.findById(req.params.id)
    .then(function(project){
        project.destroy();
        res.send('Project deleted successfully.');
    })
    .catch(function(err){
        res.send(err)
    })
})

//Exporting router
module.exports = router;
