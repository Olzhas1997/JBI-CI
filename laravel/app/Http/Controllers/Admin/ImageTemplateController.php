<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ImageTemplateRequest;
use App\Http\Resources\ImageTemplate\ImageTemplateItemResource;
use App\Models\ImageTemplate;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageTemplateController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return ImageTemplateItemResource::collection(ImageTemplate::all());
    }

    public function store(ImageTemplateRequest $request): ImageTemplateItemResource
    {
        return ImageTemplateItemResource::make(ImageTemplate::create($request->validated()));
    }

    public function show(ImageTemplate $imageTemplate): ImageTemplateItemResource
    {
        return ImageTemplateItemResource::make($imageTemplate);
    }

    public function update(ImageTemplate $imageTemplate, ImageTemplateRequest $request): ImageTemplateItemResource
    {
        $imageTemplate->update($request->validated());
        return ImageTemplateItemResource::make($imageTemplate);
    }

    public function destroy(ImageTemplate $imageTemplate): JsonResource
    {
        return JsonResource::make(['success' => $imageTemplate->delete()]);
    }
}
