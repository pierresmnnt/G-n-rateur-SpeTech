<?php

namespace App\Controller;

use App\Model\SpetechManager;

class SpetechController extends AppController
{
    /**
     * Get all items and display them in the form
     */
    public function index()
    {
        $spetechManager = new SpetechManager;
        $items = $spetechManager->getAll();

        $this->render('selectionFormView', compact('items'));
    }

    /**
     * Post submission and return data
     */
    public function newSelection($data)
    {
        $spetechManager = new SpetechManager;
        $selection = $spetechManager->postForm($data);

        $this->render('showSelectionView', compact('selection'));
    }
}