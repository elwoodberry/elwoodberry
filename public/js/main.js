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
MOBILE BACK BUTTON
*/
(function(){
  const ANCHOR = $('#left-nav');
  const ANCHOR_HREF = ANCHOR.attr('href');
  const URL = ANCHOR_HREF.replace(':', '');

  ANCHOR.attr('href', URL);
})();

/*
SIDEBAR
*/
(function(){

  const HAMBURGER_ICON = $('#sidebar-hamburger');
  const SIDEBAR_AREA = $('.sidebar-container');
  const DEFAULT_AREA = $('#default-container');
  const CANVAS_HEADER = $('.canvas-header h4');

  // ACTIVE INDICATORS
  const TYPE_DASHBOARD = $('#type-past').length;
  const TYPE_LAYOUT = $('#type-layout').length;
  const TYPE_DESIGN = $('#type-design').length;
  const TYPE_PROTOTYPE = $('#type-prototype').length;

  // MENU ICONS
  const MENU_DASHBOARD = $('.menu-icon-dashboard').parent();
  const MENU_PROTOTYPE = $('.menu-icon-prototype').parent();
  const MENU_DESIGN = $('.menu-icon-design').parent();
  const MENU_LAYOUT = $('.menu-icon-layout').parent();

  // MENU ICONS ANCHOR
  const MENU_ICONS_A = $('#vertical-menu-icons li a');

  $(document).ready(function(){
    if(TYPE_DASHBOARD > 0){
      MENU_ICONS_A.removeClass('active');
      MENU_DASHBOARD.addClass('active');
    }
    if(TYPE_LAYOUT > 0){
      MENU_ICONS_A.removeClass('active');
      MENU_LAYOUT.addClass('active');
    }
    if(TYPE_DESIGN > 0){
      MENU_ICONS_A.removeClass('active');
      MENU_DESIGN.addClass('active');
    }
    if(TYPE_PROTOTYPE > 0){
      MENU_ICONS_A.removeClass('active');
      MENU_PROTOTYPE.addClass('active');
    }
  });



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
