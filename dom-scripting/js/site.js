$('html').addClass('js').removeCLass('no-js');

$('a[href^="http"]').on('click', function(event) {
  window.open($(this).attr('href'), "_blank");
  event.preventDefault();
});
