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

/*
 * All routes and middleware for /projects
 */
router.get('/', function(req, res) {
    Project.findAll()
    .then(function(project) {
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
    Project.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(function(project){
        res.send(project)
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
    Project.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(function(project){
        project.destroy();
        res.send('Project deleted successfully.');
    })
    .catch(function(req, res){
        res.send(err)
    })
})

//Exporting router
module.exports = router;
