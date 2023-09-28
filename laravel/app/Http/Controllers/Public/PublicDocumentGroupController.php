<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCategoryResource;
use App\Models\DocumentCategory;
use App\Models\DocumentGroup;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use OpenApi\Annotations as OA;

class PublicDocumentGroupController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/public/document-groups",
     *      summary="Получение списка групп документов",
     *      description="Возвращает список групп документов",
     *      tags={"Public/DocumentGroup"},
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
}
