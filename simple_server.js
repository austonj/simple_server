//Express is required for creating Node.js based web apps
var express = require('express');

// Path module for resolving file paths
var path = require('path');

var app = express();
app.set('port', process.env.PORT);

// Set the express view engine as html.
app.set('view engine', 'html');

// Serve the "views" folder. No need to specify ".html" when serving html files.
// app.use(express.static(__dirname + '/views'));
app.use(express.static(
  path.resolve(__dirname, 'views'), 
  {extensions: ['html']}));

//Starting up the server on the port: 3300
app.listen(app.get('port'), function(){
  console.log('Server up: http://localhost:' + app.get('port'));
});