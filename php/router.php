<?php

class Router {

  public function __construct() {
    
  }

  public function getUri() {
    if(!empty($_SERVER['REQUEST_URI'])) {
      return trim($_SERVER['REQUEST_URI'], "/");
    }

    return "/";
  }

  public function run() {
    $uri = $this->getUri();

    $routes = array(
      "disinsection" => __DIR__."/views/disinsection.php",
      "disinfection" => __DIR__."/views/disinfection.php",
      "deratisation" => __DIR__."/views/deratisation.php"
    );

    foreach($routes as $pattern => $path) {
      if(preg_match("~$pattern~", $uri)) {
        if(file_exists($path)) {
          include_once($path);
          return;
        }
      }
    }

    include_once(__DIR__."/views/main.php");
  }

}

?>