<?php

namespace App;

class Autoloader
{
    public static function register()
    {
        spl_autoload_register([__CLASS__, 'autoloader']);
    }

    public static function autoloader($classname)
    {
        if (strpos($classname, __NAMESPACE__ . '\\') === 0) {
            $classname = str_replace(__NAMESPACE__ . '\\', '', $classname);
            $classname = str_replace('\\', '/', $classname);
            require __DIR__ . '/' . $classname . '.php';
        }
    }
}