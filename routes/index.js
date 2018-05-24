var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: "Home" , welcome: "Welcome to the Home page"});
});

router.get('/aboutMe', function(req, res, next) {
    res.render('aboutMe', { title: "About Me", welcome: "Welcome to About Me" });
});

router.get('/projectSuggestion', function(req, res, next) {
    res.render('projectSuggestion', { title: "Project Suggestions", welcome: "Welcome to Project Suggestions" });
});

module.exports = router;
