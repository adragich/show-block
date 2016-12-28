// Code goes here
$(function(){

  var el = $('.main-block'),
      mask = el.find('.mask');

  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop(), compare = el.offset().top - $(window).height() * 0.33;

    if(scroll >= compare){
      if(!mask.is('.appear')) mask.addClass('appear');
    }
    else if(!!mask.is('.appear')) {
      mask.removeClass('appear');
    }
  });

});