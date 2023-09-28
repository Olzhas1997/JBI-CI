<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class DocumentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title'       => 'required|string',
            'is_active'   => 'sometimes|boolean',
            'file'        => 'sometimes|nullable|json',
            'category_id' => 'sometimes|exists:App\Models\DocumentCategory,id|int',
            'group_id'    => 'sometimes|exists:App\Models\DocumentGroup,id|int',
            'date'        => 'sometimes|nullable|date',
        ];
    }
}
