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
// Let express use body-parser
app.use(bodyParser.urlencoded({extended: true}));

/*
 * Routing
 */
require('./routes')(app);

/*
 * Server listener
 */
var port = 3000;

app.listen(port, function() {
    console.log('Let the magic happen! Server listening on port ' + port + '.')
});

