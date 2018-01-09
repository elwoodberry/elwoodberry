var express = require('express');
var router = express.Router();

/* GET Dashboard. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {
    title: "elwoodberry",
    description: "Elwood Berry Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    projects: [
      {
        name: 'name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        img: ''
      },
      {
        name: 'name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        img: ''
      },
      {
        name: 'name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        img: ''
      },
      {
        name: 'name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        img: ''
      },
      {
        name: 'name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        img: ''
      }
    ]
  });
});

module.exports = router;
