<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadImageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'files'      => 'required|array',
            'files.*'    => 'required|file',
            'template'   => 'sometimes|string',
            'zoom'       => 'sometimes|string',
            'position'   => 'sometimes|string|json'
        ];
    }
}
