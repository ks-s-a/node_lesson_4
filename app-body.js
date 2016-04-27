// Post form example

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var PORT = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Main page handler
app.get('/', function (req, res) {
  res.send('<form method="post"><input name="name" /><input name="surname" /><input type="submit" /></form>');
});

// Post query handler
app.post('/', function (req, res) {
  var html = '<form method="post">'+
    '<input value="'+
      req.body.name +
      '" name="name" />'+
    '<input value="'+
      req.body.surname +
      '" name="surname" />'+
    '<input type="submit" />'+
    '</form>';

  res.send( html + 'Thank you for your personal data sending!');
});

var server = app.listen(PORT, function () {
  console.log('Server was running on: ', PORT);
});
