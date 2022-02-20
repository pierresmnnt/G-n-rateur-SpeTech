<?php 

namespace App\Model;

class SpetechManager extends Manager
{
    /**
     * Function that gets all the data group by type
     */
    public function getAll(): array
    {
        $data = json_decode($this->getData(), true);

        return $this->groupBy('type', $data);
    }

    /**
     * Function that gets data from json file according to the form submission
     * 
     * @param {Array} $formData 
     */
    public function postForm($formData): array
    {
        $newSelection = [];

        foreach($formData as $value => $formItem) {
            foreach(json_decode($this->getData(), true) as $item)
            {
                if ($item['value'] == $value) {
                    $newSelection[] = $item;
                }
            }
        }

        return $newSelection;
    }

    /**
     * Function that groups an array of associative arrays by some key
     * 
     * @param {String} $key Property to sort by
     * @param {Array} $data
     */
    private function groupBy($key, $data): array
    {
        $result = [];

        foreach($data as $item) {
            if(key_exists($key, $item)){
                $result[$item[$key]][] = $item;
            } else {
                $result[""][] = $item;
            }
        }

        return $result;
    }
}