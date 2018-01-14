/*
MOBILE BACK BUTTON
*/
(function(){

  const projectDetail = $('#project-detail').length;

  if(projectDetail > 0){
    backButton();
  }

  function backButton(){
    var ANCHOR = $('#left-nav');
    var ANCHOR_HREF = ANCHOR.attr('href');
    var URL = ANCHOR_HREF.replace(':', '');
    var PAST = '/portfolio/past';
    var DASH = '/dashboard';


    // console.log( URL );
    // console.log( PAST );
    // console.log( URL == PAST );

    if(URL == PAST){
      URL = DASH;
    }

    ANCHOR.attr('href', URL);
  }


})();
