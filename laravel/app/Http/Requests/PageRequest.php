<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title'       => 'required|string',
            'slug'        => 'sometimes|nullable|string',
            'is_active'   => 'sometimes|nullable|string',
            'description' => 'sometimes|nullable|string',
            'content'     => 'sometimes|nullable|json',
        ];
    }
}
