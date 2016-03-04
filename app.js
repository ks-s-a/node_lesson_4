var express = require('express');
var app = express();
var PORT = 8000;

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.get('/admin', function (req, res) {
  res.send('This is an admin panel.');
});

var server = app.listen(PORT, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('Server was running on: ', host, port);
});
