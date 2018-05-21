var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Darren's First Express App Hosted on an EB Instance" , welcome: "Welcome to the Index page"});
});

router.get('/testPage1', function(req, res, next) {
    res.render('testPage1', { title: "Darren's First Express App Hosted on an EB Instance", welcome: "Welcome to Test Page 1" });
});

module.exports = router;
