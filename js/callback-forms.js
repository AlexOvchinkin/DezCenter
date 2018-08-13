'use strict'

/////////////////////////////////////////////////
// INITIALIZATION
$(function () {

  initForm('#callbackFormWrapperUp');
  initForm('#callbackFormWrapperDown');

  $('#btnMoreInfo').on('click', showCallForm({
    direction: 'up',
    id: '#callbackFormWrapperUp',
    height: 20
  }));

  $('#btnOrder').on('click', showCallForm({
    direction: 'down',
    id: '#callbackFormWrapperDown',
    height: 24
  }));

  $('#btnCall_1').on('click', showFeedbackInline('#callbackFormWrapperUp'));
  $('#btnCall_3').on('click', showFeedbackInline('#callbackFormWrapperDown'));
  $('#btnCall_2').on('click', showFeedbackModal('#callFormModal'));

  $('#clientPhone_1').on('keyup', onPhoneTyping)
  $('#clientPhone_2').on('keyup', onPhoneTyping)
  $('#clientPhone_3').on('keyup', onPhoneTyping)
});


/////////////////////////////////////////////////
// DEFINITIONS
function initForm(id) {
  if (!id) return;

  var btnClose = $(id + ' .btn-close');
  btnClose.on('click', closeForm(id));
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
    if (isFormValid(id)) {
      setHiddenFormValue(id);
      $('#hidden-form__btn').click();
      showFeedback(id);

      setTimeout(function () {
        closeForm(id)();
      }, 4000);
    } else {
      showErrors(id);
    }
  }
}

function showFeedbackModal(id) {
  return function () {
    if (isFormValid(id)) {
      setHiddenFormValue(id);
      $('#hidden-form__btn').click();
      showFeedback(id);

      setTimeout(function () {
        $(id).modal('hide');
      }, 4000);
    } else {
      showErrors(id);
    }
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

// function validate fields of given form
function isFormValid(id) {
  $(id + ' .callback-form__label-name').addClass('d-none');
  $(id + ' .callback-form__label-phone').addClass('d-none');

  if (!isNameValid(id) || !isPhoneValid(id)) {
    return false;
  }

  return true;
}

// function show errors of given form
function showErrors(id) {
  if (!isNameValid(id)) {
    $(id + ' .callback-form__label-name').removeClass('d-none');
  }

  if (!isPhoneValid(id)) {
    $(id + ' .callback-form__label-phone').removeClass('d-none');
  }
}

// function validate "name" input value
function isNameValid(id) {
  var name = $(id + ' input[name="name"]').val();

  if (!name || name.trim() === '') {
    return false;
  }

  return true;
}

// function validate "phone" input value
function isPhoneValid(id) {
  var phone = $(id + ' input[name="phone"]').val();
  var regex = /\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}/;

  if (!phone || !regex.test(phone)) {
    return false;
  }

  return true;
}

// set values for Roistat-form
function setHiddenFormValue(id) {
  var name = $(id + ' input[name="name"]').val();
  var phone = $(id + ' input[name="phone"]').val();

  $('#hidden-form__name').val(name);
  $('#hidden-form__phone').val(phone);
}

// phone-input 'keyup' handler
function onPhoneTyping(ev) {
  if (ev.key === 'Backspace') {
    return;
  }

  var str = this.value.replace(/[^0-9]+/g, '');
  var newString = '';

  if (str.substring(0, 1) !== '7') {
    newString = '+7(' + str;
  } else {
    newString = '+' + str;
  }

  if (newString.length >= 2 && newString.charAt(2) !== '(') {
    newString = newString.slice(0, 2) + '(' + newString.slice(2);
  }

  if (newString.length >= 6 && newString.charAt(6) !== ')') {
    newString = newString.slice(0, 6) + ')' + newString.slice(6);
  }

  if (newString.length >= 10 && newString.charAt(10) !== '-') {
    newString = newString.slice(0, 10) + '-' + newString.slice(10);
  }

  if (newString.length >= 13 && newString.charAt(13) !== '-') {
    newString = newString.slice(0, 13) + '-' + newString.slice(13);
  }

  if (newString.length > 16) {
    newString = newString.slice(0, 16);
  }

  this.value = newString;
}