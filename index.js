var express = require('express');
var app = express();

require('dotenv').config()

app.set('port', (process.env.PORT || 5000));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', function (request, response) {
  response.sendFile('index.html', { root: __dirname })
});

app.listen(app.get('port'), function () {
  console.log("Node app running at localhost:" + app.get('port'));
});

module.exports = app
