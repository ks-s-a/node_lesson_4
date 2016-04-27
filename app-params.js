// Form with get method handling

var express = require('express');
var app = express();

var PORT = 8000;

app.get('/', function (req, res) {
  var form = '<form method="get"><input name="name" /><input name="surname" /><input type="submit" /></form>';
  var queryJSON = JSON.stringify(req.query);

  res.send(form + queryJSON);
});

var server = app.listen(PORT, function () {
  console.log('Server was running on: ', PORT);
});
