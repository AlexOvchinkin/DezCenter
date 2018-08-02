<?php

function getHeader($page) {
  require_once(dirname(__DIR__).'/templates/header.php');
}

function getStylesheet($page) {
  return '<link rel="stylesheet" href="css/'.$page.'/styles.css">';
}

function getTemplate($template) {
  require_once dirname(__DIR__).'/templates/'.$template.'.php';
}

?>
