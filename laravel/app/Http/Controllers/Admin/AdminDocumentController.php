<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Document\DocumentRequest;
use App\Http\Resources\Document\DocumentResource;
use App\Models\Document;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminDocumentController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/documents",
     *      summary="Получение списка документов",
     *      description="Возвращает список документов",
     *      tags={"Admin/Document"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentIndexResource")
     *         )
     *      ),
     * )
     */
    public function index(): AnonymousResourceCollection
    {
        return DocumentResource::collection(Document::all());
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/documents",
     *      tags={"Admin/Document"},
     *      summary="Добавление нового документа",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/DocumentRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentResource")
     *       ),
     * )
     */
    public function store(DocumentRequest $request): DocumentResource
    {
        return DocumentResource::make(Document::create($request->validated()));
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/documents/{id}",
     *      tags={"Admin/Document"},
     *      summary="Получение группы документов",
     *      @OA\Parameter(
     *          name="id",
     *          description="id документа",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentResource")
     *       ),
     * )
     */
    public function show(Document $document): DocumentResource
    {
        return DocumentResource::make($document);
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/documents/{id}",
     *      tags={"Admin/Document"},
     *      summary="Обновление группы документов",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/DocumentRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentResource")
     *       ),
     * )
     */
    public function update(DocumentRequest $request, Document $document): DocumentResource
    {
        $document->update($request->validated());
        return DocumentResource::make($document);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/documents/{id}",
     *      tags={"Admin/Document"},
     *      summary="Удаление документа",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DeleteResource")
     *       ),
     * )
     */
    public function destroy(Document $document): JsonResource
    {
        return JsonResource::make(['success' => $document->delete()]);
    }
}
