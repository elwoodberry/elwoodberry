var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "elwoodberry",
    description: "Elwood Berry Portfolio Application",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com",
    billboards: [
      {
        id:1,
        titleOne: "Front End",
        titleTwo: "Developer",
        excerpt: "Your application works but no one knows how to use it. Its ugly. Bloated with out dated libraries and conflicting scripts. You probably need a seasoned front end developer. Who you gonna call? Elwood. .of course. ",
        img: './img/frontend.png',
        type: 'Intuitive'
      },
      {
        id:2,
        titleOne: "JavaScript",
        titleTwo: "Developer",
        excerpt: "My magic wand. Your favorite framework's Daddy. ECMA Script provides me the ability to build applications from front to back. Depending on the size of the team will determine how many hats I need to wear. ",
        img: './img/javascript.png',
        type: 'Full Stack'
      },
      {
        id:3,
        titleOne: "User",
        titleTwo: "Centered Design",
        excerpt: "To anticipate the end users expectations. To design with less ego and more on the users needs. What problem are we trying to solve? I have to ask the team the hard questions that may simply our efforts or.. . not. Sorry.",
        img: './img/ux.png',
        type: 'UI/UX'
      },
      {
        id:4,
        titleOne: "Responsive",
        titleTwo: "Designer",
        excerpt: "It has to work everywhere everytime on any device. That is my responsibility on the team. To deliver the same mind blowing, 'Wow, thats cool', impact to the end user despite what device they pick up. You're welcome.",
        img: './img/responsive.png',
        type: 'Device Agnostic'
      }
    ]
  });
});

module.exports = router;
