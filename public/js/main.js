

$('.hamburger').on('click', function(){
  console.log('clicked');
  $('.sidebar-container').toggleClass('expanded-sidebar');
  $('#default-container').toggleClass('expanded-container');
  $('.canvas-header h4').toggleClass('expanded');
});
