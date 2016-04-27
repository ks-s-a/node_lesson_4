// The easiest example of Express application

var express = require('express');
var app = express();

var PORT = 8000;

// Main page
app.get('/', function (req, res) {
  res.send('Hello world!');
});

// Handler of /admin page
app.get('/admin', function (req, res) {
  res.send('This is an admin panel.');
});

var server = app.listen(PORT, function () {
  console.log('Server was running on: ', PORT);
});
