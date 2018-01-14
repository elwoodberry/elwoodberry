# elwoodberry



## Installation

Clone Github
```
$ git clone https://github.com/elwoodberry/elwoodberry.git
```

Change directory to the master branch
```
$ cd elwoodberry
```
Install packages  
```
$ sudo npm install
```
Run the application(in the background)
```
sudo nohup nodejs app.js &
```




## Project Type

The source of 'type'
['/routes/portfolio/*'](/routes/portfolio/)
```
router.get('/route', function(req, res, next) {
  res.render('viewfile', {
    type: 'type'
  });
});
```
