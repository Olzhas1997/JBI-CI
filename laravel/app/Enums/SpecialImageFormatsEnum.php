<?php

namespace App\Enums;

/**enum для форматов изображений, которые конвертер не умеет обрабатывать. значение - мимтайп*/
enum SpecialImageFormatsEnum: string {
    case svg = 'image/svg+xml';
}
