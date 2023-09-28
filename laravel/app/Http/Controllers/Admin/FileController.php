<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileRequest;
use App\Http\Requests\UploadImageRequest;
use App\Services\UploadService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use OpenApi\Annotations as OA;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FileController extends Controller
{
    public function store(UploadImageRequest $request, UploadService $uploadService): JsonResource
    {
        return JsonResource::make($uploadService->upload($request->validated()));
    }

    /**
     * @OA\Post(
     *      path="/api/v1/public/file",
     *      summary="Получение file",
     *      description="Возвращает file",
     *      tags={"Public/File"},
     *      @OA\RequestBody(
     *       required=true,
     *       description="тело запроса",
     *       @OA\JsonContent(
     *           @OA\Property(
     *               property="path",
     *               type="string",
     *           )
     *       )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DownloadFileResource")
     *         )
     *      ),
     * )
     */
    public function show(FileRequest $request): StreamedResponse|JsonResource
    {
        $path = str_replace('storage/', '', $request->path);
        if (Storage::disk('public')->exists($path)) {
            return Storage::disk('public')->download($path);
        }
        return JsonResource::make(['error' => 404, 'message' => 'not found']);
    }
}
