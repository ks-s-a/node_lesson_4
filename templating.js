var express = require('express');
var template = require('consolidate').handlebars;

var app = express();

app.engine('hbs', template);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', {
    moment: new Date(),
    action: ['спать'],
  });
});

app.get('/worker', function (req, res) {
  res.render('index', {
    moment: new Date(),
    action: ['брать дрель'],
  });
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server was running on: ', host, port);
});
