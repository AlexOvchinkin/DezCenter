<?php 

// dev
// ini_set('display_errors', 1);
// error_reporting(E_ALL);
// ~ dev

// require __DIR__."/views/main.php";

require_once("router.php");

$router = new Router();
$router->run();

?>