//require necessary node modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Create a new app
var app = express();

// Setting the views to jade
app.set('views', './src/views');
app.set('view engine', 'jade');

// Send the following files of static content to the client
app.use(express.static('images'));

// Render main page
app.get('/', function (request, response) {
	response.render('index');
});

// Set up the server to listen to port 3000
var server = app.listen(3000, function () {
	console.log('App listening on port: ' + server.address().port);
});