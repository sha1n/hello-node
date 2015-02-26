var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', date: new Date().toJSON(), ref: '/api/sum?x=1&y=1' });
});

module.exports = router;
