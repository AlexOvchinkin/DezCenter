<?php

function getHeader($page) {
  require_once(dirname(__DIR__).'/templates/header.php');
}

function getStylesheet($page) {
  return '<link rel="stylesheet" href="css/'.$page.'/styles.css?3.2">';
}

function getTemplate($template) {
  require_once dirname(__DIR__).'/templates/'.$template.'.php';
}

function getFooter($page) {
  require_once(dirname(__DIR__).'/templates/footer.php');
}

function getScript($page) {
  return '<script src="/js/'.$page.'/scripts.js?2.2"></script>';
}

?>
