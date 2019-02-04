var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
  res.send([{Name: 'iPhone', Price: 1000}, {Name: 'iMac', Price: 2000}]);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});