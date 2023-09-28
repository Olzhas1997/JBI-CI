<?php

namespace App\Http\Resources\News;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminIndexNewsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'title'        => $this->title,
            'type'         => $this->type,
            'slug'         => $this->slug,
            'category'     => ($this->newsCategory) ? $this->newsCategory->title : '',
            'is_active'    => $this->is_active,
            'date'         => $this->date,
            'preview_img'  => $this->preview_img,
            'detail_img'   => $this->detail_img,
            'content'      => $this->content,
            'preview_text' => $this->preview_text,
            'detail_text'  => $this->detail_text,
        ];
    }
}
