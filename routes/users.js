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

/**
 * All routes and middleware for /users
 */

/**
 * @api {get} /users Request all users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {Object[]} users
 * @apiSuccess {Number} users.id The id of the user
 * @apiSuccess {String} users.pseudo The user's pseudo
 * @apiSuccess {String} users.description The user's description
 * @apiSuccess {String} users.email The user's description
 * @apiSuccess {Date} users.createdAt The user's creation date
 * @apiSuccess {Date} users.updatedAt The date the user's profile was last updated
 */
router.get('/', function(req, res) {
    User.findAll({
        attributes: ['pseudo', 'description', 'email', 'createdAt', 'updatedAt'] //Getting only those fields
    })
    .then(function(users) {
        res.send(users)
    })
    .catch(function(err) {
        res.send(err)
    })
})

/**
 * @api {post} /users Create a new User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} pseudo The user's pseudo
 * @apiParam {String} password The user's pseudo
 * @apiParam {String} email The user's e-mail
 * @apiParam {String} [description] Optional user's description
 *
 * @apiSuccess {String} success A short message saying "User added successfuly."
 */
.post('/', function(req, res) {
    var user = User.build({
        pseudo: req.body.pseudo,
        password: req.body.password,
        email: req.body.email
    })
    user.save()
    .then(function() {
        res.send({success: "User added successfuly." })
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {get} /users/:id Request all users
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {Object} user
 * @apiSuccess {Number} user.id The id of the user
 * @apiSuccess {String} user.pseudo The user's pseudo
 * @apiSuccess {String} user.description The user's description
 * @apiSuccess {String} user.email The user's description
 * @apiSuccess {Date} user.createdAt The user's creation date
 * @apiSuccess {Date} user.updatedAt The date the user's profile was last updated
 */
.get('/:id', function(req, res) {
    User.findById()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err) {
        res.send(err)
    })
})

/**
 * @api {put} /users/:id Change a user's informations
 * @apiName SetUser
 * @apiGroup User
 *
 * @apiParam {Number} id The id of the user to update
 *
 * @apiSuccess {String} success A short message saying "User updated successfuly."
 */
.put('/:id', function(req, res){
    User.findById(req.params.id)
    .then(function(user){
        user.update(req.body);
        res.send({success: "User updated successfully." });
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {get} /users/:id/tasks Request all tasks a user is linked to
 * @apiName GetUserTasks
 * @apiGroup User
 *
 * @apiParam {Number} id The user's id you want to get the tasks out of
 *
 * @apiSuccess {Object[]} tasks
 * @apiSuccess {Number} tasks.id Id of the task
 * @apiSuccess {String} tasks.title The title of the task
 * @apiSuccess {String} tasks.description The task's description
 * @apiSuccess {Date} tasks.createdAt The creation date
 * @apiSuccess {Date} tasks.updatedAt The date the tasks was last updated
 */
.get('/:id/tasks', function(req, res){
    User.findById(req.params.id)
    .then(function(user){
        user.getTasks()
        .then(function(tasks){
            res.send(tasks)
        })
    })
    .catch(function(err){
        res.send(err)
    })
})

/**
 * @api {delete} /users/:id Delete a user
 * @apiName RemoveUser
 * @apiGroup User
 *
 * @apiParam {Number} id The id of the user to delete
 *
 * @apiSuccess {String} success A short message saying "Task deleted successfuly."
 */
.delete('/:id', function(req, res) {
    User.findById(req.params.id)
    .then(function(user){
        user.destroy();
        res.send({success: "User deleted successfuly." })
    })
    .catch(function(err) {
        res.send(err)
    })
})

// Exporting router
module.exports = router;
