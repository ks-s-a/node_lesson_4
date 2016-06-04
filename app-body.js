// Post form example

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({ extended: false }) );

// parse application/json
app.use( bodyParser.json() );

// Main page handler
app.get('/', function (req, res) {
  res.send( getForm() );
});

// Post query handler
app.post('/', function (req, res) {
  var form = getForm(req.body.name, req.body.surname);

  res.send(form + 'Thank you for your personal data sending!');
});

var getForm = function (name, surname) {
  return '<form action="/" method="post">'+
    '<input value="'+ (name || '') +'" name="name" />'+
    '<input value="'+ (surname || '') +'" name="surname" />'+
    '<input type="submit" />'+
  '</form>';
};

app.listen(8000, function () {
  console.log('Server was running on: ', 8000);
});
