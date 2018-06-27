var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! from VM');
});
app.listen(3025, function () {
  console.log('Example app listening on port 3025!');
});
