var express = require('express');
var router = express.Router();

var user;

router.post('/', function(req, res) {
  user = req.body;
  res.send();
});

router.get('/', function (req, res) {
  res.send(user);
});

module.exports = router;
