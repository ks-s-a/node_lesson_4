// Templating example with handlebars usage

var express = require('express');
var template = require('consolidate').handlebars;

var app = express();
var PORT = 8000;

// Define a templating mechanism
app.engine('hbs', template);

// Set express variables for fast template handling
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Main page
app.get('/', function (req, res) {
  res.render('index', {
    moment: new Date(),
    action: ['спать'],
  });
});

// Additional page
app.get('/worker', function (req, res) {
  res.render('index', {
    moment: new Date(),
    action: ['брать дрель'],
  });
});

app.listen(PORT, function () {
  console.log('Server was running on: ', PORT);
});
