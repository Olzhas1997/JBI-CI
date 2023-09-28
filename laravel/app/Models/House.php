<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class House extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function complex(): BelongsTo
    {
        return $this->belongsTo(Complex::class, 'complex_id', 'id');
    }

    public function flats(): HasMany
    {
        return $this->hasMany(Product::class, 'house_id', 'external_id')
            ->where('type', '=', 'Жилое помещение');
    }

    public function commerce(): HasMany
    {
        return $this->hasMany(Product::class, 'house_id', 'external_id')
            ->where('type', '=', 'Коммерческая недвижимость');
    }
}
