<?php

namespace App\Services;

use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageConverterService
{
    const QUALITY = 80;

    public function getResizedImage(UploadedFile $image, array $sizes, string $name, $data): string {
        //Image::make берет путь относительно папки паблик
        $img = $image;

        if (isset($data['position'])) {
            $position = json_decode($data['position'], true);
        }

        if (isset($position)) {
            $imageWidth = $sizes['width'];
            $imageHeight = $sizes['height'];

            if (isset($data['zoom'])) {
                $imageWidth = getimagesize($img)[0] * $data['zoom'];
                $imageHeight = getimagesize($img)[1] * $data['zoom'];
            }

            $newImage = Image::make($img)
                ->resize((int)$imageWidth, (int)$imageHeight, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->resizeCanvas((int)$imageWidth, (int)$imageHeight)
                ->crop((int)$sizes['width'],
                    (int)$sizes['height'],
                    (int)$position['x'] * $data['zoom'] ?? null,
                    (int)$position['y'] * $data['zoom'] ?? null
                )
                ->stream('webp', self::QUALITY);
        } else {
            $newImage = Image::make($img)->stream('webp', self::QUALITY);
        }
        Storage::disk('local')
            ->put("public/images/mini/{$name}_{$sizes['width']}x{$sizes['height']}.webp", $newImage);

        return "storage/images/mini/{$name}_{$sizes['width']}x{$sizes['height']}.webp";
    }
}
