'use strict'

/////////////////////////////////////////////////
// INITIALIZATION
var individClasses = [{
    id: '#carouselAssistanceIndivid',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#assistanceTableIndivid',
    class: 'd-md-block',
    show: 'ADD',
    hide: 'REMOVE'
  },
  {
    id: '#pricingTableIndivid',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#carouselDirectionsIndivid',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#directionsCardIndivid',
    class: 'd-lg-block',
    show: 'ADD',
    hide: 'REMOVE'
  }
];

var entityClasses = [{
    id: '#carouselAssistanceEntity',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#assistanceTableEntity',
    class: 'd-md-block',
    show: 'ADD',
    hide: 'REMOVE'
  },
  {
    id: '#pricingTableEntity',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#pest',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#causes',
    class: 'pest-hidden',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#carouselDirectionsEntity',
    class: 'd-none',
    show: 'REMOVE',
    hide: 'ADD'
  },
  {
    id: '#directionsCardEntity',
    class: 'd-lg-block',
    show: 'ADD',
    hide: 'REMOVE'
  }
];

// start initialization
$(function () {
  $('.main-carousel__indicator').on('click', changeIndividEntityMode);
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

function changeIndividEntityMode() {
  var individ = $(this).attr('data-ind');
  individ = individ === 'true' ? true : false;
  changeMode(individ);
}

// function changes visibility of all classes depending the "mode"
function changeMode(mode) {
  changeVisible(individClasses)(mode);
  changeVisible(entityClasses)(!mode);
};

// function changes visibility
function changeVisible(arrayOfClasses) {
  return function (show) {
    Array.prototype.forEach.call(arrayOfClasses,
      function (item) {
        // find current element
        var element = $(item.id);

        // show / hide
        if (element) {
          var classString = item.class;
          var action = show ? item.show : item.hide;

          if (action === 'ADD') {
            element.addClass(classString);
          } else if (action === 'REMOVE') {
            element.removeClass(classString);
          }
        }
      });
  }
}