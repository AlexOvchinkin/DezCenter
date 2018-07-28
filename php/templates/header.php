<!doctype html>
<html lang="ru">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="icon" href="img/favicon.png">

  <!-- CSS -->
  <link rel="stylesheet" href="styles.css">

  <title>Дез-Центр "Прогресс"</title>
</head>

<body>

  <div class="callback" id="callbackFormWrapperUp">
    <form class="callback-form">
      <div class="container">
        <div class="row justify-content-center">
          <p class="callback-form__title text-center">Наш менеджер перезвонит вам в течение 10 минут</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 my-3">
            <input type="text" class="form-control callback-form__control" placeholder="Как Вас зовут">
          </div>
          <div class="col-12 mb-3">
            <input type="text" class="form-control callback-form__control" placeholder="Ваш телефон">
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-between">
            <button type="button" class="btn btn-success">Позвоните мне</button>
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
        <img class="img-fluid navigation__logo-img" src="img/logo.png" alt="ДезЦентр Прогресс">
      </a>
      <div class="d-flex navigation__contacts">
        <div class="d-flex align-items-center mr-3 phone">
          <img class="d-block phone__img" src="img/phone.png" alt="phone">
          <p class="m-0 ml-2 font-weight-bold phone__text">8(903)123-45-67</p>
        </div>
        <button id="btnRequestCall" class="btn btn-success navigation__btn">ЗАКАЗАТЬ ЗВОНОК</button>
      </div>
    </div>
  </nav>