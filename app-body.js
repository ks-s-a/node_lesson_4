var bodyParser = require('body-parser');
var express = require('express');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('<form method="post"><input name="name" /><input name="surname" /><input type="submit" /></form>');
});

app.post('/', function (req, res) {
  res.send('This is an admin panel. : ', req.body);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server was running on: ', host, port);
});
