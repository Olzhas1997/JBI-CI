<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsCategory\NewsCategoryRequest;
use App\Http\Resources\NewsCategoryResource;
use App\Models\NewsCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminNewsCategoryController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/news-categories",
     *      summary="Получение списка категорий новостей",
     *      description="Возвращает список категорий новостей",
     *      tags={"Admin/NewsCategory"},
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
        return NewsCategoryResource::collection(NewsCategory::all());
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/news-categories",
     *      tags={"Admin/NewsCategory"},
     *      summary="Добавление новой категории новости",
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
        return NewsCategoryResource::make(NewsCategory::create($request->validated()));
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/news-categories/{id}",
     *      tags={"Admin/NewsCategory"},
     *      summary="Получение категории новости",
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
    public function show(NewsCategory $newsCategory): NewsCategoryResource
    {
        return NewsCategoryResource::make($newsCategory);
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/news-categories/{id}",
     *      tags={"Admin/NewsCategory"},
     *      summary="Обновление категории новости",
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
    public function update(NewsCategoryRequest $request, NewsCategory $newsCategory): NewsCategoryResource
    {
        $newsCategory->update($request->validated());
        return NewsCategoryResource::make($newsCategory);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/news-categories/{id}",
     *      tags={"Admin/NewsCategory"},
     *      summary="Удаление категории новости",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsCategoryDeleteResource")
     *       ),
     * )
     */
    public function destroy(NewsCategory $newsCategory): JsonResource
    {
        return JsonResource::make(['success' => $newsCategory->delete()]);
    }
}
