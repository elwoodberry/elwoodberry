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
