// Пример приложения на ExpressJS

var express = require('express');
var app = express();

var PORT = 8000;

// Обработчик корневой страницы
app.get('/', function (req, res) {
  res.send('Hello world!');
});

// Дополнительная страница /admin
app.get('/admin', function (req, res) {
  res.send('This is an admin panel.');
});

// Запускаем сервер
app.listen(PORT, function () {
  console.log('Server is launched on: ', PORT);
});
