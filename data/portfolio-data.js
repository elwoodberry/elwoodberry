const projects = [
  {
    id: '000001',
    name: 'The Story Of TEMPO',
    excerpt: 'Tempo was a LMS(learning manage system) for large enterprises. Used to distribute video, documents, surveys, etc from a central location out to individuals in the field.',
    description: "Tempo would capture analytics and display them to the central location's admins. These analytics would deliver data sets like number of views, device used, browser used, operating system as well as giving credit to the individual who viewed the content.",
    img: '/img/portfolio/01_tempo/001__tempo.png',
    imgurl: "https://drive.google.com/file/d/0B_3VRU7JVIAqQW5keHdVWU12U0E/view?usp=sharing",
    technologies: ['Adobe Illustrator', 'HTML5', 'CSS3', 'jQuery', 'JavaScript', 'Ionic', 'Angular 1'],
    otherimgs: [
      {
        name: 'mobile v1',
        thumb: "/img/portfolio/01_tempo/002_tempo.png",
        url:"https://drive.google.com/file/d/0B_3VRU7JVIAqZTEzaWp2eTNqSmM/view?usp=sharing"
      },
      {
        name: 'poll analytics v1 01',
        thumb: "/img/portfolio/01_tempo/002_tempo.png",
        url:"https://drive.google.com/file/d/0B_3VRU7JVIAqelU5LUl2VDI0dTg/view?usp=sharing"
      },
      {
        name: 'poll analytics v1 02',
        thumb: "/img/portfolio/01_tempo/002_tempo.png",
        url:"https://drive.google.com/file/d/0B_3VRU7JVIAqelU5LUl2VDI0dTg/view?usp=sharing"
      },
      {
        name: 'video analytics concept',
        thumb: "/img/portfolio/01_tempo/002_tempo.png",
        url:"https://drive.google.com/file/d/0B_3VRU7JVIAqelU5LUl2VDI0dTg/view?usp=sharing"
      }
    ],
    tags: ['past']
  },
  {
    id: '000002',
    name: 'Beta',
    excerpt: 'Beta: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    description: '',
    img: 'beta.jpg',
    tags: []
  },
  {
    id: '000003',
    name: 'Charlie',
    excerpt: 'Charlie: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    description: '',
    img: 'charlie.jpg',
    tags: []
  },
  {
    id: '000004',
    name: 'Delta',
    excerpt: 'Delta: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    description: '',
    img: 'delta.jpg',
    tags: []
  },
  {
    id: '000005',
    name: 'Echo',
    excerpt: 'Echo: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    img: 'echo.jpg',
    tags: []
  }
];

function pastProjects(){
  let pastProjects = [];

  for(i = 0; i < projects.length; i++) {
    if(projects[i].tags.indexOf('past') > -1){
      pastProjects.push(projects[i]);
    }
  }

  return pastProjects;

}

module.exports.projects = projects;
module.exports.pastProjects = pastProjects;
