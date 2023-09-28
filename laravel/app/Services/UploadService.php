<?php

namespace App\Services;

use App\Enums\SpecialImageFormatsEnum;
use App\Helpers\UploadFilesHelper;
use App\Models\ImageTemplate;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadService
{
    public function upload($data): array
    {
        $result = [];
        foreach ($data['files'] as $key => $file) {
             $result[$key] = $this->saveFile($file, $data);
        }
        return $result;
    }

    private function saveFile(UploadedFile $file, $data): array
    {
        if (UploadFilesHelper::checkImageFormats($file)) {
            return $this->saveImage($file, $data);
        } else {
            return $this->saveOtherFile($file);
        }
    }

    private function saveImage(UploadedFile $file, $data): array
    {
        $imgDirPath = 'public/images';
        $safePath = 'storage/images';

        if (! Storage::exists($imgDirPath)) {
            Storage::makeDirectory($imgDirPath, 0777, true, true);
        }

        $type = trim(str_replace(' ', '_', explode('.', $file->getClientOriginalName())[1]));
        $name = Str::random(20) . base64_encode($file->getClientOriginalName()) . Str::random(4);

        $file->storePubliclyAs($imgDirPath, $name . '.' . $type);

        $result = ['original' => $safePath . '/' . $name . '.' . $type];

        if ($file->getClientMimeType() === 'image/svg+xml') {
            $min = [
                'desktop' => $safePath . '/' . $name . '.' . $type,
                'mobile'  => $safePath . '/' . $name . '.' . $type,
            ];
        } else {
            $link = "$safePath/$name.$type";
            $min = $this->getResized($file, $link, $name, $data);
        }
        return [...$result, ...$min];
    }

    private function getResized(UploadedFile $image, $link, $name, $data): array
    {
        $template = null;
        if (array_key_exists('template', $data)) {
            $template = ImageTemplate::whereId($data['template'])->firstOrFail();
        }
        if (null === $template) {
            $size = [
                'width'  => getimagesize($image)[0],
                'height' => getimagesize($image)[1],
            ];
            $sizes = [
                'desktop' => $size,
                'mobile'  => $size,
            ];
        } else {
            $sizes = $template->settings;
        }
        $urls = [];

        if (null !== SpecialImageFormatsEnum::tryFrom($image->getMimeType())) {
            $urls['desktop'] = $link;
            $urls['mobile'] = $link;
            return $urls;
        }

        $imageService = new ImageConverterService();
        foreach ($sizes as $key => $format) {
            $urls[$key] = $imageService->getResizedImage(
                $image,
                $format,
                $name,
                $data
            );
        }
        return $urls;
    }

    private function saveOtherFile(UploadedFile $file): array
    {
        $filesDir = 'public/files';
        $safePath = 'storage/files';
        if (! Storage::exists('public/images')) {
            Storage::makeDirectory($filesDir, 0777, true, true);
        }
        $name = Str::random(10) . $file->getClientOriginalName();
        $file->storePubliclyAs($filesDir, $name);
        return ['file' => $safePath . '/' . $name];
    }

}
