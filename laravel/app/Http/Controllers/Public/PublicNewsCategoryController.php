<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCategoryResource;
use App\Models\NewsCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use OpenApi\Annotations as OA;

class PublicNewsCategoryController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/public/news-categories",
     *      summary="Получение списка категорий новостей",
     *      description="Возвращает список категорий новостей",
     *      tags={"Public/NewsCategory"},
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
}
