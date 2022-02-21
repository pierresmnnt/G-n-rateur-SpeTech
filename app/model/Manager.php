<?php

namespace App\Model;

class Manager
{
    /**
     * Function that gets data from json file
     */
    protected function getData(): string
    {
        $data = file_get_contents("../data.json");

        if ($data === "") {
            throw new \Exception('No data found');
        }

        return $data;
    }
}