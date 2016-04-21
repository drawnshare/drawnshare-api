/*
 * Dependencies
 */
var express = require('express');
var models = require('./models');
var bodyParser = require('body-parser');

/*
 * Creating express app
 */
var app = express();

app.use(bodyParser.json());

/*
 * Basic routing
 */
app.get('/', function(req, res) {
    res.redirect('/api')
});

app.get('/api', function(req, res) {
    console.info('Client reached the API home.')
    res.send('Welcome to the api.')
});

/*
 * Basic listener
 */
var port = 3000;

app.listen(port, function() {
    console.log('Let the magic happen! Server listening on port ' + port + '.')
});

