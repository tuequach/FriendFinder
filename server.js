var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express ();
var PORT = process.envPORT || 3000;

app.use(express.static('app/public'));


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//Routes
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);

app.listen(PORT, function() {
    console.log("Listening on this port" + PORT);

})

