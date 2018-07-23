'use strict'

/////////////////////////////////////////////////
// INITIALIZATION
var individClasses = [
  { id: '#carouselAssistanceIndivid', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#assistanceTableIndivid', class: 'd-md-block', show: 'ADD', hide: 'REMOVE' },
  { id: '#pricingTableIndivid', class: 'd-none', show: 'REMOVE', hide: 'ADD' }
];

var entityClasses = [
  { id: '#carouselAssistanceEntity', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#assistanceTableEntity', class: 'd-md-block', show: 'ADD', hide: 'REMOVE' },
  { id: '#pricingTableEntity', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#pest', class: 'd-none', show: 'REMOVE', hide: 'ADD' },
  { id: '#causes', class: 'pest-hidden', show: 'REMOVE', hide: 'ADD' }
];


disableAllCarousels();

$('.main-carousel__indicator').on('click', indicatorClick);
$(window).scroll(scrolling);
$('#btnMoreInfo').on('click', clickMoreInfo);
$('#callbackFormBtnClose').on('click', closeForm('#callbackFormWrapper'));


/////////////////////////////////////////////////
// DEFINITION
function disableAllCarousels() {
  $.each($('.carousel'), function (key, value) {
    var id = value.id;
    $('#' + id).carousel({
      interval: 0
    });
  });
}

function scrolling() {
  if ($(this).scrollTop() > 150) {
    $("#navigationBar").addClass('fixed-top');
  } else {
    $("#navigationBar").removeClass('fixed-top');
  }
}

function clickMoreInfo() {
  $("html, body").animate({
    scrollTop: $("html").offset().top
  }, 500);

  if ($(window).scrollTop() > 0) {
    setTimeout(function () {
      animateForm('#callbackFormWrapper');
    }, 600);
  } else {
    animateForm('#callbackFormWrapper');
  }
}

function closeForm(id) {
  return function () {
    $(id).animate({
      height: '0'
    }, 500);
  }
}

function animateForm(id) {
  $(id).animate({
    height: '16rem'
  }, 500);
}

function indicatorClick() {
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

