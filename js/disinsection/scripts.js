// start initialization
$( function () {
  window.onresize = refreshSlider;
  $( '.guarantees__slides--prev' ).on( 'click', slide( 'prev' ) );
  $( '.guarantees__slides--next' ).on( 'click', slide( 'next' ) );
} );


/////////////////////////////////////////////////
// DEFINITIONS
function refreshSlider() {
  $( '.guarantees__slider' ).css( 'left', 0 );
}

function slide( direction ) {
  return function () {
    var animationObj = { };
    var slidesWidth = $( '.guarantees__slides' ).width();

    if ( direction === 'prev' ) {
      if ( $( '.guarantees__slider' ).css( 'left' ) === "0px" ) {
        animationObj = { left: "0px" }
      } else {
        animationObj = { left: '+=' + slidesWidth + 'px' }  
      }

    } else {
      var left = $( '.guarantees__slider' ).css( 'left' ).replace('px', '');
      var maxOffset = slidesWidth + Math.abs(+left);

      if( maxOffset >= $( '.guarantees__slider' ).width() ) {
        animationObj = { };
      } else {
        animationObj = { left: '-=' + slidesWidth + 'px' }
      }
    }

    $( '.guarantees__slider' ).animate( animationObj, 500 );
  }
}