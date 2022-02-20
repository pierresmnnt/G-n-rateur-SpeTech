<?php

use App\Autoloader;
use App\Controller\ErrorController;
use App\Controller\SpetechController;

define('ROOT', dirname(__DIR__));
require ROOT . '/app/Autoloader.php';
Autoloader::register();

try {
    if (!empty($_GET)) {
        // If url parameters then get data accordingly
        $controller = new SpetechController;
        $controller->newSelection($_GET);
    } else {
        $controller = new SpetechController;
        $controller->index();
    }
} catch (\Throwable $th) {
    $error = $th->getMessage();
    $controller = new ErrorController;
    $controller->index($error);
}
