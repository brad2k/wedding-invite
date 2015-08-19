var express = require('express');
var router = express.Router();
//var register = require('./register');

var year = new Date().getFullYear();

/* GET home page. */
router.get('/', function(req, res, next) {
    var fontsLoaded = req.cookies['fonts-loaded'] ? req.cookies['fonts-loaded'] : false;
    res.render('index', { fontsLoaded: fontsLoaded, year: year });
});

/* Route for registering an email address */
/*router.post('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
