var express = require('express');
var router = express.Router();

// PORTFOLIO DATA
var portfolio = require('../data/portfolio-data');
var pastProjects = portfolio.setProject('past');
var designProjects = portfolio.setProject('design');
var layoutProjects = portfolio.setProject('layout');
var prototypeProjects = portfolio.setProject('prototype');

// LAYOUTS
router.get('/layouts', function(req, res, next) {
  res.render('portfolio/grid', {
    title: "Layouts",
    description: "Application Layouts by Elwood Berry -||- Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    type: 'layouts',
    projects: layoutProjects
  });
});

// DESIGN
router.get('/designs', function(req, res, next) {
  res.render('portfolio/grid', {
    title: "Graphic Design",
    description: "Graphic Design by Elwood Berry -||- Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    type: 'designs',
    projects: designProjects
  });
});

// PROTOTYPES
router.get('/prototypes', function(req, res, next) {
  res.render('portfolio/grid', {
    title: "Prototypes",
    description: "Application Prototypes by Elwood Berry -||- Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    type: 'prototypes',
    projects: prototypeProjects
  });
});

// PORTFOLIO DETAIL ROUTE VIEW
router.get('/:id/:type', function(req, res){

  var REQ_TYPE = req.params.type;
  var REQ_ID = req.params.id;
  var ID = REQ_ID.slice(1, 7);
  var proj = {};

  for(i = 0; i < portfolio.projects.length; i++) {
    if(ID == portfolio.projects[i].id){
      proj = {
        id: portfolio.projects[i].id,
        name: portfolio.projects[i].name,
        excerpt: portfolio.projects[i].excerpt,
        description: portfolio.projects[i].description,
        img: portfolio.projects[i].img,
        imgurl: portfolio.projects[i].imgurl,
        technologies: portfolio.projects[i].technologies,
        otherimgs: portfolio.projects[i].otherimgs,
        type: REQ_TYPE
      }
    }
  }

  res.render('portfolio/details', proj);

});

module.exports = router;
