var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({
    "name": "Jerry",
    "surname": "Smith",
    "email": "jerry.smith@gmail.com",
    "age": 37
  });
});

module.exports = router;
