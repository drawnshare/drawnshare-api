/*
 * Dependencies
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

/*
 * Getting needed models
 */
var User = models.User;
var Task = models.Task;

/*
 * All routes and middleware for /tasks
 */
router.get('/', function(req, res) {
    User.findAll({
        attributes: ['pseudo', 'description', 'email'] //Getting only those fields
    })
    .then(function(users) {
        res.send(users)
    })
    .catch(function(err) {
        res.send(err)
    })
})

.post('/', function(req, res) {
    var user = User.build({
        pseudo: req.body.pseudo,
        password: req.body.password,
        email: req.body.email
    })
    user.save().then(function() {
        res.send("User added successfuly.")
    })
    .catch(function(err){
        res.send(err)
    })
})

.get('/:id', function(req, res) {
    User.findAll({
        attributes: ['pseudo', 'description', 'email'],
        where: {
            id: req.params.id
        },
        include: [{
            model: Task
        }]
    })
        .then(function(user){
            res.send(user)
        })
        .catch(function(err) {
            res.send(err)
        })
})

.put('/:id', function(req, res){
    User.findById(req.params.id)
    .then(function(user){
        user.update(req.body);
        res.send("User updated successfully.");
    })
    .catch(function(err){
        res.send(err)
    })
})

.get('/:id/tasks', function(req, res){
    User.findAll({
        where: {id: req.params.id}, 
        include:{model: Task}
    })
    .then(function(user){
        res.send(user.tasks)
    })
    .catch(function(err){
        res.send(err)
    })
})

.delete('/:id', function(req, res) {
    User.findById(req.params.id)
        .then(function(user){
            user.destroy();
            res.send('User deleted successfuly')
        })
    .catch(function(err) {
        res.send(err)
    })
})

// Exporting router
module.exports = router;
