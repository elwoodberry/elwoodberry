// NEW PROJECT


// 'Bubbling Phase' vs 'Capturing Phase'

(function(){

  'use strict';

  const projectName = document.getElementById('project-name');
  const projectExcerpt = document.getElementById('project-excerpt');
  const projectDescript = document.getElementById('project-description');

  const nameCharCountDisplay = document.getElementById('projectName');
  const excerptCharCountDisplay = document.getElementById('projectExcerpt');
  const descriptCharCountDisplay = document.getElementById('projectDescription');




  projectName.addEventListener( "keydown", function(){
    let maxCharacters = 50;
    let valueLength = projectName.value.length;
    nameCharCountDisplay.innerHTML = (maxCharacters - valueLength) + ' Remaing Characters';
  });

  projectExcerpt.addEventListener("keydown", function(){
    let maxCharacters = 160;
    let valueLength = projectExcerpt.value.length;
    excerptCharCountDisplay.innerHTML = (maxCharacters - valueLength) + ' Remaing Characters';
  });

  projectDescript.addEventListener("keydown", function(){
    let maxCharacters = 300;
    let valueLength = projectDescript.value.length;
    descriptCharCountDisplay.innerHTML = (maxCharacters - valueLength) + ' Remaing Characters';
  });

  window.addEventListener('load', function() {

    var form = document.getElementById('new-project');

    let checkbox = document.querySelectorAll("input[name=technology]");

    for(var value of checkbox.values()) {
      value.addEventListener( 'change', function() {
        if(this.checked) {
            // Checkbox is checked..
            console.log(this.getAttribute("value"));
        } else {
            // Checkbox is not checked..
            console.log(this.getAttribute("value"));
        }
      });
    }

    form.addEventListener('submit', function(e) {
      //let cboxTechnology = document.getElementsByName("technology");
      //let checkbox = document.querySelectorAll("input[name=technology]");

      // console.log( checkbox.values() );

      //console.log( 'Technology: ' + cboxTechnology.length );





      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }

      // LOG VALUES
      // console.log( 'Name: ' + projectName.value );
      // console.log( 'Excerpt: ' + projectExcerpt.value );
      // console.log( 'Descript: ' + projectDescript.value );



      form.classList.add('was-validated');

    }, false);

  }, false);

})();
