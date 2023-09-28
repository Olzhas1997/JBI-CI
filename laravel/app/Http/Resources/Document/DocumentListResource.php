<?php

namespace App\Http\Resources\Document;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentListResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title'     => $this->title,
            'is_active' => $this->is_active,
            'date'      => $this->date,
            'category'  => $this->category?->title,
            'group'     => $this->group?->title,
            'file'      => $this->file,
        ];
    }
}
