/*
SIDEBAR
*/
(function(){

  // ACTIVE INDICATORS
  const TYPE_DASHBOARD = $('#type-past').length;
  const TYPE_LAYOUT = $('#type-layouts').length;
  const TYPE_DESIGN = $('#type-designs').length;
  const TYPE_PROTOTYPE = $('#type-prototypes').length;

  console.log('TYPE_DASHBOARD: ' + TYPE_DASHBOARD);
  console.log('TYPE_LAYOUT: ' + TYPE_LAYOUT);
  console.log('TYPE_DESIGN: ' + TYPE_DESIGN);
  console.log('TYPE_PROTOTYPE: ' + TYPE_PROTOTYPE);

  // MENU ICONS
  const MENU_DASHBOARD = $('.menu-icon-dashboard').parent();
  const MENU_PROTOTYPE = $('.menu-icon-prototype').parent();
  const MENU_DESIGN = $('.menu-icon-design').parent();
  const MENU_LAYOUT = $('.menu-icon-layout').parent();

  // MENU ICONS ANCHOR
  const MENU_ICONS_A = $('#vertical-menu-icons li a, #horizontal-menu-icons li a');

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


  // Deprecated 01/13/2018
  /*
  const HAMBURGER_ICON = $('#sidebar-hamburger');
  const SIDEBAR_AREA = $('.sidebar-container');
  const DEFAULT_AREA = $('#default-container');
  const CANVAS_HEADER = $('.canvas-header h4');

  HAMBURGER_ICON.on('click', function(){
    SIDEBAR_AREA.toggleClass('expanded-sidebar');
    DEFAULT_AREA.toggleClass('collapse-area');
    CANVAS_HEADER.toggleClass('expanded');
  });
  */


})();
