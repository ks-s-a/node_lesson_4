// Создание промежуточной логики в ExpressJS

var express = require('express');
var app = express();

// Общий middleware для всех запросов
app.use(function middleware(req, res, next) {
  // Забираем данные с базы
  res.myData = {
    score: 46,
  };

  next();
});

app.get('/', function (req, res) {
  res.send('Your score is: '+ res.myData.score);
});

app.get('/player', saveScoreInConsole, function (req, res) {
  res.send('Player score is : '+ res.myData.score);
});

app.use(function (req, res) {
  res.send('Oooups! The page is not exist');
});

// Запускаем сервер
app.listen(8000, function () {
  console.log('Server was running on: ', 8000);
});

// Функция-middleware
function saveScoreInConsole(req, res, next) {
  console.log('player score is: ', res.myData.score);

  next();
}
