<!doctype html>
<html lang="ru">

<head>
  <!-- Required meta tags   -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="icon" href="/img/favicon.png">

  <!-- CSS -->
  <?php
  include_once dirname(__DIR__)."/lib/functions.php";
  echo getStylesheet($page);
   ?>

    <title>Дез-Центр "Прогресс"</title>
</head>

<body>

  <div class="callback" id="callbackFormWrapperUp">
    <form id="callbackFormUp" class="callback-form d-none">
      <div class="container">
        <div class="row justify-content-center">
          <p class="callback-form__title text-center">Наш менеджер перезвонит вам в течение 10 минут</p>
        </div>
        <div class="row justify-content-center callback-form__loading d-none">
          <p class="py-3 callback-form__title text-center">Отправка заявки ...</p>
        </div>
        <div class="row justify-content-center callback-form__feedback d-none">
          <p class="py-3 callback-form__title text-center">Ваша заявка принята. Спасибо!</p>
        </div>
        <div class="row justify-content-center callback-form__data">
          <div class="col-12 my-3">
            <input type="text" id="clientName_1" class="form-control callback-form__control" placeholder="Как Вас зовут">
          </div>
          <div class="col-12 mb-3">
            <input type="text" id="clientPhone_1" class="form-control callback-form__control" placeholder="Ваш телефон">
          </div>
        </div>
        <div class="row callback-form__buttons">
          <div class="col d-flex justify-content-between">
            <button type="button" id="btnCall_1" class="btn btn-success">Позвоните мне</button>
            <button type="button" class="btn btn-outline-success btn-close">
              Скрыть
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <nav id="navigationBar" class="navbar sticky-top navbar-light navigation">
    <div class="container">
      <a class="navbar-brand navigation__brand" href="/">
        <img class="img-fluid navigation__logo-img" src="/img/logo.png" alt="ДезЦентр Прогресс">
      </a>
      <div class="d-flex navigation__contacts">
        <div class="d-flex align-items-center mr-3 phone">
          <img class="d-block phone__img" src="/img/phone.png" alt="phone">
          <a href="tel:84951111111" class="m-0 ml-2 font-weight-bold roistatphone phone__text"></a>
        </div>
        <button id="btnRequestCall" class="btn btn-success navigation__btn" onclick="window.roistatLeadHunterShow();">
          Обратный звонок
        </button>
      </div>
    </div>
  </nav>