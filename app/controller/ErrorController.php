<?php

namespace App\Controller;

class ErrorController extends AppController
{
    /**
     * Get all items and display them in the form
     */
    public function index($error)
    {
        $this->render('errorView', compact('error'));
    }
}