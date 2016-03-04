var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var form = '<form method="get"><input name="name" /><input name="surname" /><input type="submit" /></form>';
  var queryJSON = JSON.stringify(req.query);

  res.send(form + queryJSON);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server was running on: ', host, port);
});
