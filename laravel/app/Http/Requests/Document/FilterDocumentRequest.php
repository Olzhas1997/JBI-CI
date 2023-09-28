<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class FilterDocumentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'f.category_id' => 'sometimes|int',

            'per_page' => 'sometimes|int',
            'page'     => 'sometimes|int',
            'all'      => 'sometimes|boolean',
        ];
    }
}
