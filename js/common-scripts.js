/////////////////////////////////////////////////
// INITIALIZATION

// start initialization
$(function () {
  $(window).scroll(scrolling);
  $('.guarantees__slider').on('click', showCertificate);
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
  var wrapper = $(ev.target).closest('.guarantees__img-wrapper');

  if(wrapper.children.length > 0) {
    var image = wrapper.children()[0];
    var path = $(image).attr('src');
    var newPath = path.replace('-sm.jpg', '.jpg');

    $('#certificates-form img').attr('src', newPath);
    $('#certificates-form').modal( { show: true } );
  }
}