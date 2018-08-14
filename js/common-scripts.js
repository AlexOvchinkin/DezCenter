/////////////////////////////////////////////////
// INITIALIZATION

// start initialization
$(function () {
  $(window).scroll(scrolling);

  $('.guarantees__slider').on('click', showCertificate);
  $('.guarantees__slides--prev').on('click', slide('prev'));
  $('.guarantees__slides--next').on('click', slide('next'));

  window.onresize = refreshSlider;
});



/////////////////////////////////////////////////
// DEFINITIONS

function scrolling() {
  if ($(this).scrollTop() > 100) {
    $("#navigationBar").addClass('shadow-sm');
  } else {
    $("#navigationBar").removeClass('shadow-sm');
  }
}

function showCertificate(ev) {
  $('#certificates-form img').attr('src', "");

  var wrapper = $(ev.target).closest('.guarantees__img-wrapper');

  if (wrapper.children.length > 0) {
    var image = wrapper.children()[0];
    var path = $(image).attr('src');
    var newPath = path.replace('-sm.jpg', '.jpg');

    $('#certificates-form img').attr('src', newPath);
    $('#certificates-form').modal({
      show: true
    });
  }
}

function refreshSlider() {
  $('.guarantees__slider').css('left', 0);
}

function slide(direction) {
  return function () {
    // disable current button
    $(this).prop('disabled', 'true');

    var prev = $('.guarantees__slides--prev');
    var next = $('.guarantees__slides--next');

    var animationObj = {};
    var slidesWidth = $('.guarantees__slides').width();

    // disable both buttons
    prev.prop('disabled', 'true');
    next.prop('disabled', 'true');

    if (direction === 'prev') {
      if ($('.guarantees__slider').css('left') === "0px") {
        animationObj = {
          left: "0px"
        }
      } else {
        animationObj = {
          left: '+=' + slidesWidth + 'px'
        }
      }

    } else {
      var left = $('.guarantees__slider').css('left').replace('px', '');
      var maxOffset = slidesWidth + Math.abs(+left);

      if (maxOffset >= $('.guarantees__slider').width()) {
        animationObj = {};
      } else {
        animationObj = {
          left: '-=' + slidesWidth + 'px'
        }
      }
    }

    $('.guarantees__slider').animate(animationObj, 500);

    // enable both buttons after animation
    setTimeout(function () {
      prev.removeAttr('disabled', 'false');
      next.removeAttr('disabled', 'false');
    }, 600);
  }
}