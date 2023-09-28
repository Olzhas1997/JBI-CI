<?php

namespace App\Helpers;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadFilesHelper
{
    public static function checkImageFormats(UploadedFile $file): bool
    {
        return match ($file->getClientMimeType()) {
            'image/png',
            'image/jpeg',
            'image/webp',
            'image/svg+xml',
            'image/jpg' => true,
            default     => false,
        };
    }
}
