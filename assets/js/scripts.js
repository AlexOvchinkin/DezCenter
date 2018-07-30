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

  initForm('#callbackFormWrapperUp');
  initForm('#callbackFormWrapperDown');

  $('.main-carousel__indicator').on('click', changeIndividEntityMode);
  $(window).scroll(scrolling);

  $('#btnMoreInfo').on('click', showCallForm({
    direction: 'up',
    id: '#callbackFormWrapperUp',
    height: 16
  }));

  $('#btnOrder').on('click', showCallForm({
    direction: 'down',
    id: '#callbackFormWrapperDown',
    height: 20
  }));

  $('#btnCall_1').on('click', showFeedbackInline('#callbackFormWrapperUp'));
  $('#btnCall_3').on('click', showFeedbackInline('#callbackFormWrapperDown'));
  $('#btnCall_2').on('click', showFeedbackModal('#callFormModal'));
});


/////////////////////////////////////////////////
// DEFINITIONS
function initForm(id) {
  if (!id) return;

  var btnClose = $(id + ' .btn-close');
  btnClose.on('click', closeForm(id));
}

function scrolling() {
  if ($(this).scrollTop() > 100) {
    $("#navigationBar").addClass('shadow-sm');
  } else {
    $("#navigationBar").removeClass('shadow-sm');
  }
}

function resetFormView(id) {
  $(id + ' .callback-form__buttons').removeClass('d-none');
  $(id + ' .callback-form__data').removeClass('d-none');
  $(id + ' .callback-form__feedback').addClass('d-none');
}

function showCallForm(opts) {
  return function () {
    resetFormView(opts.id);

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

    $(id + ' form').addClass('d-none');
  }
}

function animateForm(id, height) {
  $(id).animate({
    height: height + 'rem'
  }, 500);

  setTimeout(function () {
    $(id + ' form').removeClass('d-none');
  }, 500);
}

function showFeedbackInline(id) {
  return function () {
    showFeedback(id);

    setTimeout(function () {
      closeForm(id)();
    }, 4000);
  }
}

function showFeedbackModal(id) {
  return function () {
    showFeedback(id);

    setTimeout(function () {
      $(id).modal('hide')
    }, 4000);
  }
}

function showFeedback(id) {
  $(id + ' .callback-form__buttons').addClass('d-none');
  $(id + ' .callback-form__data').addClass('d-none');
  $(id + ' .callback-form__loading').removeClass('d-none');

  setTimeout(function () {
    $(id + ' .callback-form__loading').addClass('d-none');
    $(id + ' .callback-form__feedback').removeClass('d-none');
  }, 2000);
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