<?php

namespace App\Helpers;

class ParseDataHelper
{
    public static function prepareProductFields($data): array
    {
        $result = null;
        foreach ($data as $item) {
            if (empty($item['Значение'])) {
                $item['Значение'] = null;
            } if (is_array($item['Значение'])) {
                $item['Значение'] = implode(';', $item['Значение']);
            }
            $result[$item['Ид']] = $item['Значение'];
        }
        return $result;
    }
}
