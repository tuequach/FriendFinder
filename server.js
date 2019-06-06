var express = require('express');
var path = require('path');
var fs = require('fs');

//Middleware to parse json
var bodyParser = require('body-parser');

var app = express ();
var PORT = process.envPORT || 3000;

//static files if needed.
app.use(express.static('app/public'));
app.use(express.static(_dirname + "/app/css"));


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//Routes
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);

app.listen(PORT, function() {
    console.log("Listening on this port" + PORT);

})

