// start initialization
$(function () {
  window.onresize = refreshSlider;
  $('.guarantees__slides--prev').on('click', slide('prev'));
  $('.guarantees__slides--next').on('click', slide('next'));
});


/////////////////////////////////////////////////
// DEFINITIONS
function refreshSlider() {
  $('.guarantees__slider').css('left', 0);
}

function slide(direction) {
  return function () {
    var imageWidth = $('.guarantees__img-wrapper:first-child').width();
    var animationObj = direction === 'prev' ?
      { left: '+=' + imageWidth + 'px' } :
      { left: '-=' + imageWidth + 'px' };

    $('.guarantees__slider').animate(animationObj, 500);
  }
}