'use strict'

/////////////////////////////////////////////////
// INITIALIZATION
var individClasses = [
  { id: '#carouselAssistanceIndivid', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#assistanceTableIndivid', class: 'd-md-block', show: 'ADD', hide: 'REMOVE' },
  { id: '#pricingTableIndivid', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#carouselDirectionsIndivid', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#directionsCardIndivid', class: 'd-lg-block', show: 'ADD', hide: 'REMOVE' }
];

var entityClasses = [
  { id: '#carouselAssistanceEntity', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#assistanceTableEntity', class: 'd-md-block', show: 'ADD', hide: 'REMOVE' },
  { id: '#pricingTableEntity', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#pest', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#causes', class: 'pest-hidden', show: 'REMOVE', hide: 'ADD' },
  { id: '#carouselDirectionsEntity', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#directionsCardEntity', class: 'd-lg-block', show: 'ADD', hide: 'REMOVE' }
];

// start initialization
$(function () {
  
  initForm('#callbackFormWrapperUp');
  initForm('#callbackFormWrapperDown');

  $('.main-carousel__indicator').on('click', changeIndividEntityMode);
  $(window).scroll(scrolling);

  $('#btnMoreInfo').on('click', showCallForm({
    direction: 'up',
    id: '#callbackFormWrapperUp',
    height: 16
  }));

  $('#btnRequestCall').on('click', showCallForm({
    direction: 'up',
    id: '#callbackFormWrapperUp',
    height: 16
  }));

  $('#btnOrder').on('click', showCallForm({
    direction: 'down',
    id: '#callbackFormWrapperDown',
    height: 20
  }));
});




/////////////////////////////////////////////////
// DEFINITION
function initForm(id) {
  if (!id) return;

  var btnClose = $(id + ' .btn-close');
  btnClose.on('click', closeForm(id));
}

/*
function disableAllCarousels() {
  $.each($('.carousel'), function (key, value) {
    var id = value.id;
    $('#' + id).carousel({
      interval: 0
    });
  });
}
*/

function scrolling() {
  if ($(this).scrollTop() > 100) {
    $("#navigationBar").addClass('shadow-sm');
  } else {
    $("#navigationBar").removeClass('shadow-sm');
  }
}

function showCallForm(opts) {
  return function () {
    if (opts.direction === 'up') {
      $("html, body").animate({
        scrollTop: $("html").offset().top
      }, 500);

      if ($(window).scrollTop() > 0) {
        setTimeout(function () {
          animateForm(opts.id, opts.height);
        }, 600);
      } else {
        animateForm(opts.id, opts.height);
      }

    } else {
      animateForm(opts.id, opts.height);

      setTimeout(function () {
        $("html, body").animate({
          scrollTop: $(opts.id).offset().top - $('#navigationBar').height() - 20
        }, 500);
      }, 500);
    }
  }
}

function closeForm(id) {
  return function () {
    $(id).animate({
      height: '0'
    }, 500);
  }
}

function animateForm(id, height) {
  $(id).animate({
    height: height + 'rem'
  }, 500);
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

