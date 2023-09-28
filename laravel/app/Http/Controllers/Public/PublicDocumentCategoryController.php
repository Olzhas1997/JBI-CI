<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCategoryResource;
use App\Models\DocumentCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use OpenApi\Annotations as OA;

class PublicDocumentCategoryController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/public/document-categories",
     *      summary="Получение списка категорий документов",
     *      description="Возвращает список категории документов",
     *      tags={"Public/DocumentCategory"},
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
}
