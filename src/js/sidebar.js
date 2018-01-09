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
