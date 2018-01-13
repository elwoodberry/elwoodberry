// SPLASH PAGE

(function(){


  $(document).ready(function(){

    let hamburgerIcon = $('.hamburger');
    let footer = $('footer');
    hamburgerIcon.addClass('ready');
    footer.addClass('ready');


    if( $(window).width() > 768 ){
      billboardPosition();
    }
  });

  $(window).resize(function() {
    billboardPosition();
  });

  function billboardPosition(){
    const WIDTH = 580;
    const HEIGHT = 300;

    let splash = $('#splash');
    let splashWidth =  splash.width();
    let splashHeight =  splash.height();

    let billboard = $('#splash-container');
    let posLeft = (splashWidth / 2) - (WIDTH / 2);
    let posTop = (splashHeight / 2) - (HEIGHT / 2);

    let splashBckgrnd = $('.bckgrnd');
    let bckgrndHeight = splashHeight;




    billboard.css( 'left', posLeft );
    billboard.css( 'top', posTop );
    splashBckgrnd.css( 'height', bckgrndHeight );

  }

})();
