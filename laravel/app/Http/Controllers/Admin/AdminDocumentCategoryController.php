<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsCategory\NewsCategoryRequest;
use App\Http\Resources\NewsCategoryResource;
use App\Models\DocumentCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminDocumentCategoryController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/document-categories",
     *      summary="Получение списка категорий документов",
     *      description="Возвращает список категории документов",
     *      tags={"Admin/DocumentCategory"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryIndexResource")
     *         )
     *      ),
     * )
     */
    public function index(): AnonymousResourceCollection
    {
        return NewsCategoryResource::collection(DocumentCategory::all());
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/document-categories",
     *      tags={"Admin/DocumentCategory"},
     *      summary="Добавление новой категории документов",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryResource")
     *       ),
     * )
     */
    public function store(NewsCategoryRequest $request): NewsCategoryResource
    {
        return NewsCategoryResource::make(DocumentCategory::create($request->validated()));
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/document-categories/{id}",
     *      tags={"Admin/DocumentCategory"},
     *      summary="Получение категории документов",
     *      @OA\Parameter(
     *          name="id",
     *          description="id категории",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategory")
     *       ),
     * )
     */
    public function show(DocumentCategory $documentCategory): NewsCategoryResource
    {
        return NewsCategoryResource::make($documentCategory);
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/document-categories/{id}",
     *      tags={"Admin/DocumentCategory"},
     *      summary="Обновление категории документов",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryResource")
     *       ),
     * )
     */
    public function update(NewsCategoryRequest $request, DocumentCategory $documentCategory): NewsCategoryResource
    {
        $documentCategory->update($request->validated());
        return NewsCategoryResource::make($documentCategory);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/document-categories/{id}",
     *      tags={"Admin/DocumentCategory"},
     *      summary="Удаление категории документов",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DeleteResource")
     *       ),
     * )
     */
    public function destroy(DocumentCategory $documentCategory): JsonResource
    {
        return JsonResource::make(['success' => $documentCategory->delete()]);
    }
}
