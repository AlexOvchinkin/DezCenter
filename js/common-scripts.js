/////////////////////////////////////////////////
// INITIALIZATION

// start initialization
$(function () {
  $(window).scroll(scrolling);
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