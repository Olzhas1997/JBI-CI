<?php

namespace App\Http\Requests\News;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsRequest extends FormRequest
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
            'title'        => ['string', 'nullable'],
            'slug'         => ['string', 'nullable'],
            'is_active'    => ['boolean', 'nullable'],
            'date'         => ['date', 'nullable'],
            'preview_img'  => ['sometimes', 'nullable'],
            'content'      => ['nullable', 'string'],
            'detail_img'   => ['sometimes', 'nullable'],
            'type'         => ['sometimes', 'nullable', 'string'],
            'category_id'  => ['exists:App\Models\NewsCategory,id', 'integer', 'gt:0'],
            'preview_text' => ['string', 'nullable'],
            'detail_text'  => ['string', 'nullable'],
        ];
    }
}
