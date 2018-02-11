var express = require('express');
var router = express.Router();

const projectTechnologies = [
  {
    name: "Adobe Creative Suite",
    url: "http://domain.com"
  },
  {
    name: "Dreamweaver",
    url: "http://domain.com"
  },
  {
    name: "Photoshop",
    url: "http://domain.com"
  },
  {
    name: "JavaScript",
    url: "http://domain.com"
  },
  {
    name: "ES5",
    url: "http://domain.com"
  },
  {
    name: "ES6",
    url: "http://domain.com"
  },
  {
    name: "TypeScript",
    url: "http://domain.com"
  },
  {
    name: "Angular 1",
    url: "http://domain.com"
  },
  {
    name: "Angular 2",
    url: "http://domain.com"
  },
  {
    name: "Angular 3",
    url: "http://domain.com"
  }
]

router.get('/new', function(req, res, next) {
  res.render('project/new', {
    title: "New Project",
    description: "Add A New Project To The Portfolio.",
    robots: "nofollow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    technologies: projectTechnologies
  });
});



module.exports = router;
