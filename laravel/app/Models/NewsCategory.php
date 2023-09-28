<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use HasFactory;

    public $guarded = ['id'];
    public $timestamps = false;

    protected $fillable = [
        'title',
    ];

    public function news()
    {
        return $this->hasMany(News::class, 'category_id', 'id');
    }
}
