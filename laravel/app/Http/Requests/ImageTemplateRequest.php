<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImageTemplateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title'                   => 'sometimes|string',
            'settings.desktop.width'  => 'sometimes|nullable|string',
            'settings.desktop.height' => 'sometimes|nullable|string',
            'settings.mobile.width'   => 'sometimes|nullable|string',
            'settings.mobile.height'  => 'sometimes|nullable|string',
        ];
    }
}
