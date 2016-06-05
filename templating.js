// Использование шаблонизатора на примере handlebars

var express = require('express');
var template = require('consolidate').handlebars;
var app = express();

// Определяем обработчик шаблонов
app.engine('hbs', template);

// Устанавливаем переменные для обработки шаблонов
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  // Рендеринг шаблона
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

app.listen(8000, function () {
  console.log('Server was running on: ', 8000);
});
