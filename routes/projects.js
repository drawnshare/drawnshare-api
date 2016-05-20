/**
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/**
 * Getting needed models
 */
var Project = models.Project;
var Task = models.Task;

/**
 * All routes and middleware for /projects
 */

/**
 * @api {get} /projects Request all projects
 * @apiName GetProjects
 * @apiGroup Project
 *
 * @apiSuccess {Object[]} projects
 * @apiSuccess {Number} projects.id Id of the project
 * @apiSuccess {String} projects.title The title of the project
 * @apiSuccess {String} projects.description The description of the project
 * @apiSuccess {Date} projects.createdAt The project's creation date
 * @apiSuccess {Date} projects.updatedAt The date for the last time the projects was updated
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

/**
 * @api {post} /projects Create a new project
 * @apiName CreateTask
 * @apiGroup Task
 *
 * @apiParam {String} title The title of the task
 * @apiParam {String} description A short description of the task
 *
 * @apiSuccess {String} success A short message "Project added successfuly."
 */
.post('/', function(req, res) {
    var project = Project.build({
        title: req.body.title,
        description: req.body.description
    })
    project.save()
    .then(function() {
        res.send({success: "Project added successfuly." })
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {get} /projects/:id Request a project
 * @apiName GetProject
 * @apiGroup Project
 *
 * @apiSuccess {Object} project
 * @apiSuccess {Number} project.id Id of the project
 * @apiSuccess {String} project.title The title of the project
 * @apiSuccess {String} project.description The description of the project
 * @apiSuccess {Date} project.createdAt The project's creation date
 * @apiSuccess {Date} project.updatedAt The date for the last time the projects was updated
 */
.get('/:id', function(req, res) {
    Project.findById(req.params.id)
    .then(function(project){
        res.send(project)
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {get} /projects/:id/tasks Request all tasks for a project
 * @apiName GetProjectTask
 * @apiGroup Project
 *
 * @apiParam {Number} id The project's id you want to get the tasks out of
 *
 * @apiSuccess {Object[]} tasks
 * @apiSuccess {Number} tasks.id Id of the task
 * @apiSuccess {String} tasks.title The title of the task
 * @apiSuccess {String} tasks.description The task's description
 * @apiSuccess {Date} tasks.createdAt The creation date
 * @apiSuccess {Date} tasks.updatedAt The date the tasks was last updated
 */
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

/**
 * @api {put} /projects/:id Change a project informations
 * @apiName SetProject
 * @apiGroup Project
 *
 * @apiParam {Number} id The id of the project to update
 *
 * @apiSuccess {String} success A short message saying "Project updated successfuly."
 */
.put('/:id', function(req, res){
    Project.findById(req.params.id)
    .then(function(user){
        project.update(req.body);
        res.send({success: "Project updated successfully." });
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {delete} /projects/:id Delete a project
 * @apiName RemoveProject
 * @apiGroup Project
 *
 * @apiParam {Number} id The id of the project to update
 *
 * @apiSuccess {String} success A short message saying "Project updated successfuly."
 */
.delete('/:id', function(req, res){
    Project.findById(req.params.id)
    .then(function(project){
        project.destroy();
        res.send({success: "Project deleted successfully." });
    })
    .catch(function(err){
        res.send(err)
    })
})

//Exporting router
module.exports = router;
