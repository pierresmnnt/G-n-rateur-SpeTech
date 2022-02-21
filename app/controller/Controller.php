<?php

namespace App\Controller;

class Controller
{
    protected $viewPath;
    protected $template;

    /**
     * @param {string} $view 
     * @param {array} $parameters 
    */
    protected function render($view, $parameters = [])
    {
        ob_start();
        extract($parameters);
        require($this->viewPath . $view . '.php');
        $content = ob_get_clean(); 
        require($this->viewPath . 'template/' . $this->template . '.php');
    }
}