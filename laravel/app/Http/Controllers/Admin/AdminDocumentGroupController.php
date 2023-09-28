<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsCategory\NewsCategoryRequest;
use App\Http\Resources\NewsCategoryResource;
use App\Models\DocumentGroup;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminDocumentGroupController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/document-groups",
     *      summary="Получение списка групп документов",
     *      description="Возвращает список групп документов",
     *      tags={"Admin/DocumentGroup"},
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
        return NewsCategoryResource::collection(DocumentGroup::all());
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/document-groups",
     *      tags={"Admin/DocumentGroup"},
     *      summary="Добавление новой группы документов",
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
        return NewsCategoryResource::make(DocumentGroup::create($request->validated()));
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/document-groups/{id}",
     *      tags={"Admin/DocumentGroup"},
     *      summary="Получение группы документов",
     *      @OA\Parameter(
     *          name="id",
     *          description="id группы",
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
    public function show(DocumentGroup $documentGroup): NewsCategoryResource
    {
        return NewsCategoryResource::make($documentGroup);
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/document-groups/{id}",
     *      tags={"Admin/DocumentGroup"},
     *      summary="Обновление группы документов",
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
    public function update(NewsCategoryRequest $request, DocumentGroup $documentGroup): NewsCategoryResource
    {
        $documentGroup->update($request->validated());
        return NewsCategoryResource::make($documentGroup);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/document-groups/{id}",
     *      tags={"Admin/DocumentGroup"},
     *      summary="Удаление группы документов",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DeleteResource")
     *       ),
     * )
     */
    public function destroy(DocumentGroup $documentGroup): JsonResource
    {
        return JsonResource::make(['success' => $documentGroup->delete()]);
    }
}
