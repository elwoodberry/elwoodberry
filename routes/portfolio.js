let express = require('express');
let router = express.Router();

// PORTFOLIO DATA
let portfolio = require('../data/portfolio-data');
let pastProjects = portfolio.pastProjects();

router.get('/layouts', function(req, res, next) {
  res.render('portfolio/layouts', {
    title: "Layouts",
    description: "Application Layouts by Elwood Berry -||- Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    projects: pastProjects
  });
});

// PORTFOLIO DETAIL ROUTE VIEW
router.get('/:id', function(req, res){

  const REQ_ID = req.params.id;
  const ID = REQ_ID.slice(1, 7);
  let proj = {};

  for(i = 0; i < pastProjects.length; i++) {
    if(ID == pastProjects[i].id){
      proj = {
        id: pastProjects[i].id,
        name: pastProjects[i].name,
        excerpt: pastProjects[i].excerpt,
        description: pastProjects[i].description,
        img: pastProjects[i].img,
        imgurl: pastProjects[i].imgurl,
        technologies: pastProjects[i].technologies,
        otherimgs: pastProjects[i].otherimgs
      }
    }
  }

  res.render('portfolio/details', proj);

});

module.exports = router;
