$('html').addClass('js').removeCLass('no-js');

$('a[href^="http"]').on('click', function(event) {
  window.open($(this).attr('href'), "_blank");
  event.preventDefault();
});

$('abbr[title]').on('click', function(){
  var expansion = $(this).attr('title');
  var abbr = $(this).text()
  $(this).text(expansion +" (" + abbr +")");
  $(this).addClass('is-expanded')
});

$($('li')[2]).on('click', function(){
  $(this).addClass('is-faded-out');
});

$('#doorbell')on('click', function(){
  var doorbell = new Audio('media/doorbell.mp3')
  doorbell.play();
});
