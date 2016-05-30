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
 * @apiSuccess {Date} projects.updatedAt The date for when the project was last updated
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
 * @apiName CreateProject
 * @apiGroup Project
 *
 * @apiParam {String} title The title of the task
 * @apiParam {String} description A short description of the task
 *
 * @apiSuccess {String} success A short message "Project added successfuly."
 * @apiSuccess {Object} project
 * @apiSuccess {Number} project.id Id of the project
 * @apiSuccess {String} project.title The title of the project
 * @apiSuccess {String} project.description The description of the project
 * @apiSuccess {Date} project.createdAt The project's creation date
 * @apiSuccess {Date} project.updatedAt The date for when the projects was last updated
 */
.post('/', function(req, res) {
    Project.create({
        title: req.body.title,
        description: req.body.description
    })
    .then(function(project) {
        res.send({success: "Project added successfuly.", project});
    })
    .catch(function(err){
        res.send(err);
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
        if(project) {
            res.send(project);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err){
        res.send(err);
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
        if(project) {
            project.getTasks()
            .then(function(tasks){
                res.send(tasks);
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
 * @api {get} projects/:id/users Request all users for a project
 * @apiName getProjectUsers
 * @apiGroup Project
 *
 * @apiParam {Number} id The project's id
 *
 * @apiSuccess {Object[]} users
 * @apiSuccess {Number} users.id The id of the user
 * @apiSuccess {String} users.pseudo The user's pseudo
 * @apiSuccess {String} user.description The user's description
 * @apiSuccess {String} users.email The user's description
 * @apiSuccess {Date} users.createdAt The user's creation date
 * @apiSuccess {Date} users.updatedAt The date the user's profile was last updated
 */
.get('/:id/users', function(req, res){
    Project.findById(req.params.id)
    .then(function(project){
        if(project) {
            project.getUsers()
            .then(function(users){
                res.send(users);
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
    .then(function(project){
        if(project) {
            project.update(req.body)
                .then(function(){
                    res.send({success: "Project updated successfully."});
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
 * @api {put} /projects/:id/users Add a user to a project
 * @apiName SetProjectUser
 * @apiGroup Project
 *
 * @apiParam {Number} id The project's id
 *
 * @apiParam {Number} userId the user's id
 *
 * @apiSuccess {String} success A short message saying "User linked successfully." 
 */
.put('/:id/users', function(req, res){
    Project.findById(req.params.id)
    .then(function(project){
        if(project){
            project.addUser(req.body.userId)
            .then(function(){
                res.send({success: "User linked successfully."});
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
        if(project){
            project.destroy()
            .then(function(rows){
                res.send({success: "Project deleted successfully." });
            })
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function(err){
        res.send(err);
    })
})

//Exporting router
module.exports = router;
