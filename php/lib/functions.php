<?php

function getHead($page) {
  require_once(dirname(__DIR__).'/templates/header.php');
}

function getStylesheet($page) {
  return '<link rel="stylesheet" href="css/'.$page.'/styles.css">';
}

?>
