<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\Page\PageResource;
use App\Models\Page;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use OpenApi\Annotations as OA;

class PublicPageController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/public/pages",
     *      summary="Получение списка pages",
     *      description="Возвращает список pages",
     *      tags={"Public/Page"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageIndexResource")
     *         )
     *      ),
     * )
     */
    public function index(): AnonymousResourceCollection
    {
        return PageResource::collection(Page::public()->get());
    }

    /**
     * @OA\Get(
     *      path="/api/v1/public/pages/{id}",
     *      tags={"Public/Page"},
     *      summary="Получение page",
     *      @OA\Parameter(
     *          name="id",
     *          description="id page",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageResource")
     *       ),
     * )
     */
    public function show(Page $page): PageResource
    {
        return PageResource::make($page);
    }
}
