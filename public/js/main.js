/*
BILLBOARD DISPLAY
Full canvas widget display on the dashboard
*/
(function(){

console.log('Billboard Display Script - deprecated 01/09/2018');
/*
  $(document).ready(function(){
    canvasBackground();
  });

  $(window).resize(function() {
    canvasBackground();
  });

  function canvasBackground(){
    const CANVAS = $('#billboard-canvas');
    const CANVAS_BCKGRND = $('#billboard-canvas .bckgrnd');
    const WIN_WIDTH = $(window).width();

    let canvasWidth = CANVAS.width(); // 930
    let canvasBckgrndWidth = CANVAS_BCKGRND.width();
    let posLeft = canvasWidth - WIN_WIDTH;

    CANVAS_BCKGRND.css('width', WIN_WIDTH + 200);
    CANVAS_BCKGRND.css('left', posLeft);

    console.log('CANVAS WIDTH: ' + canvasWidth );
    console.log('CANVAS BCKGRND WIDTH: ' +  canvasBckgrndWidth);
    console.log('WIN_WIDTH: ' + WIN_WIDTH);


    console.log('LEFT POSITION: ' + posLeft );
  }
*/
})();

/*
Billboard Menu
*/
(function(){

  const MENU = $('.billboard');
  const MENU_ID = $('.billboard').attr('id');
  const MENU_ITEM = $('ul.billboard-menu li');

  $(document).ready(function(){
    $('ul.billboard-menu').addClass('active');
    $('ul.billboard-menu li:first-child').addClass('active');
    $('.billboard:first-child').addClass('active');
  });

  MENU_ITEM.on('click', function(){

    let itemId = $(this).attr('id');

    $('ul.billboard-menu li').removeClass('active');
    $(this).addClass('active');

    MENU.each(function() {
      if( $(this).attr('id') == itemId){
        $('.billboard').removeClass('active');
        $(this).addClass('active');
      }
    });

  });

})();

$(document).ready(function(){

  const CANVAS = $('body');

  CANVAS.addClass('init');

});

/*
SIDEBAR
*/
(function(){
  const HAMBURGER_ICON = $('#sidebar-hamburger');
  const SIDEBAR_AREA = $('.sidebar-container');
  const DEFAULT_AREA = $('#default-container');
  const CANVAS_HEADER = $('.canvas-header h4');

  HAMBURGER_ICON.on('click', function(){
    SIDEBAR_AREA.toggleClass('expanded-sidebar');
    DEFAULT_AREA.toggleClass('collapse-area');
    CANVAS_HEADER.toggleClass('expanded');
  });


})();

// SPLASH PAGE

(function(){


  $(document).ready(function(){

    let hamburgerIcon = $('.hamburger');
    let footer = $('footer');
    hamburgerIcon.addClass('ready');
    footer.addClass('ready');

    billboardPosition();

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
