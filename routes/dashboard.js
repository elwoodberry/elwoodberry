var express = require('express');
var router = express.Router();

// PORTFOLIO DATA
var portfolio = require('../data/portfolio-data');
var pastProjects = portfolio.setProject('past');

router.get('/dashboard', function(req, res, next) {

  res.render('dashboard', {
    title: "elwoodberry",
    description: "Elwood Berry Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    prjcttype: "What",
    projects: pastProjects
  });

});

module.exports = router;
