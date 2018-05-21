var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Darren's First Express App Hosted on an EB Instance" });
});

module.exports = router;
