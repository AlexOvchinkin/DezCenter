<footer class="footer">
  <div class="container">
    <div class="footer__text">
      <p>
        Забудьте о надоедливых паразитах, насекомых, грызунах.
      </p>
      <p>
        Живите без микробов, бактерий — в правильной здоровой среде. Почувствуйте комфорт жизни.
      </p>
      <p class="font-weight-bold">Поможем во всем, обращайтесь!</p>
    </div>
  </div>

  <div class="callback" id="callbackFormWrapperDown">
    <form id="callbackFormUp" class="callback-form d-none">
      <div class="container">
        <div class="row justify-content-center">
          <p class="callback-form__title text-center">Наш менеджер перезвонит вам в течение 2ух минут</p>
        </div>
        <div class="row justify-content-center callback-form__loading d-none">
          <p class="py-3 callback-form__title text-center">Отправка заявки ...</p>
        </div>
        <div class="row justify-content-center callback-form__feedback d-none">
          <p class="py-3 callback-form__title text-center">Ваша заявка принята. Спасибо!</p>
        </div>
        <div class="row justify-content-center callback-form__data">
          <div class="col-12 my-3">
            <small class="d-none callback-form__label-name">не указано имя</small>
            <input type="text" id="clientName_3" name="name" class="form-control callback-form__control" placeholder="Как Вас зовут">
          </div>
          <div class="col-12 mb-3">
            <small class="d-none callback-form__label-phone">формат +7(ХХХ)ХХХ-ХХ-ХХ</small>
            <input type="text" id="clientPhone_3" name="phone" class="form-control callback-form__control" placeholder="Ваш телефон">
          </div>
        </div>
        <div class="row callback-form__buttons">
          <div class="col d-flex justify-content-between">
            <button type="button" id="btnCall_3" class="btn btn-success">
              Позвоните мне
            </button>
            <button type="button" class="btn btn-outline-success btn-close">
              Скрыть
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="footer__about">
    <button id="btnOrder" class="btn btn-success">Заказать</button>
    <div class="container">
      <p>© 2018 Дез-Центр “Прогресс”</p>
      <p class="font-weight-bold">Дезинсекция, дезинфекция, дератизация. Работа с физическими лицами и Абонентское
        Обслуживание организаций.</p>
      <div class="row">
        <div class="col-12 col-md-6">
          <p class="text-center text-md-right"><span class="font-weight-bold">эл. почта:</span> info.dez-progres@yandex.ru</p>
        </div>
        <div class="col-12 col-md-6">
          <p class="text-center text-md-left"><span class="font-weight-bold">адрес:</span> г.Москва, ул.Петровка д.24, стр.2</p>
        </div>
      </div>
    </div>
  </div>
</footer>

<div class="modal modal-form" tabindex="-1" role="dialog" id="callFormModal">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content pb-3">
      <form class="callback-form mx-auto">
        <div class="container">
          <div class="row justify-content-center">
            <p class="callback-form__title text-center">Наш менеджер перезвонит вам в течение 2ух минут</p>
          </div>
          <div class="row justify-content-center callback-form__loading d-none">
            <p class="py-3 callback-form__title text-center">Отправка заявки ...</p>
          </div>
          <div class="row justify-content-center callback-form__feedback d-none">
            <p class="py-3 callback-form__title text-center">Ваша заявка принята. Спасибо!</p>
          </div>
          <div class="row justify-content-center callback-form__data">
            <div class="col-12 my-3">
              <small class="d-none callback-form__label-name">не указано имя</small>
              <input type="text" id="clientName_2" name="name" class="form-control callback-form__control" placeholder="Как Вас зовут">
            </div>
            <div class="col-12 mb-3">
              <small class="d-none callback-form__label-phone">формат +7(ХХХ)ХХХ-ХХ-ХХ</small>
              <input type="text" id="clientPhone_2" name="phone" class="form-control callback-form__control"
                placeholder="Ваш телефон">
            </div>
          </div>
          <div class="row callback-form__buttons">
            <div class="col d-flex justify-content-between">
              <button type="button" id="btnCall_2" class="btn btn-success">
                Позвоните мне
              </button>
              <button type="button" class="btn btn-outline-success btn-close" data-dismiss="modal">
                Скрыть
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Bootstrap JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
  crossorigin="anonymous"></script>

<script src="/js/callback-forms.js?2.2"></script>
<script src="/js/common-scripts.js?2.2"></script>

<?php
  include_once dirname(__DIR__)."/lib/functions.php";
  echo getScript($page);
?>

<?php
include_once(dirname(__DIR__)."/analitics/roistat-counter.php"); 
include_once(dirname(__DIR__)."/analitics/google.php"); 
include_once(dirname(__DIR__)."/analitics/yandex.php"); 
?>

</body>

</html>