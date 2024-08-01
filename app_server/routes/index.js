var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Location info' });
});
router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});

module.exports = router;
