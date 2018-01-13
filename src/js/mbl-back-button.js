/*
MOBILE BACK BUTTON
*/
(function(){
  const ANCHOR = $('#left-nav');
  const ANCHOR_HREF = ANCHOR.attr('href');
  const URL = ANCHOR_HREF.replace(':', '');

  ANCHOR.attr('href', URL);
})();
