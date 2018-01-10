let express = require('express');
let router = express.Router();

// PORTFOLIO DATA
let portfolio = require('../data/portfolio-data');
let pastProjects = portfolio.setProject('past');
let designProjects = portfolio.setProject('design');
let layoutProjects = portfolio.setProject('layout');
let prototypeProjects = portfolio.setProject('prototype');

// LAYOUTS
router.get('/layouts', function(req, res, next) {
  res.render('portfolio/grid', {
    title: "Layouts",
    description: "Application Layouts by Elwood Berry -||- Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
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
    projects: prototypeProjects
  });
});

// PORTFOLIO DETAIL ROUTE VIEW
router.get('/:id', function(req, res){

  const REQ_ID = req.params.id;
  const ID = REQ_ID.slice(1, 7);
  let proj = {};

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
        otherimgs: portfolio.projects[i].otherimgs
      }
    }
  }

  res.render('portfolio/details', proj);

});

module.exports = router;
