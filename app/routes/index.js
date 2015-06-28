var express = require('express');
var router = express.Router();
//var register = require('./register');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

/* Route for registering an email address */
router.post('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
