var express = require('express');
var path = require('path');

//Middleware to parse json
var bodyParser = require('body-parser');

var app = express ();
var PORT = process.envPORT || 8080;

//static files if needed.
app.use(express.static(__dirname + "/app/css"));


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on this port" + PORT);

});

