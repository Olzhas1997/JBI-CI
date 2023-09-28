<?php

namespace App\Http\Requests\News;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class FilterNewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'f'               => 'sometimes|array',
            'f.category_id'   => 'sometimes|array',
            'f.category_id.*' => 'sometimes|int',

            'per_page' => 'sometimes|int',
            'page'     => 'sometimes|int',
        ];
    }
}
