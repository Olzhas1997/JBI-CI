<?php

namespace App\Http\Controllers\Public;

use App\Filters\NewsFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\FilterNewsRequest;
use App\Http\Resources\News\NewsResource;
use App\Models\News;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use OpenApi\Annotations as OA;

class PublicNewsController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/public/news?page=1&f[category_id][]=1&f[category_id][]=2",
     *      tags={"Public/News"},
     *      summary="Получения новостей",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourcePublic")
     *       ),
     * )
     */
    public function news(FilterNewsRequest $request): AnonymousResourceCollection
    {
        $newsRequestFilter = new NewsFilter(News::class, $request->all());
        $news = $newsRequestFilter->filter();
        return NewsResource::collection($news);
    }

    /**
     * @OA\Get(
     *      path="/api/v1/public/news/{id}",
     *      tags={"Public/News"},
     *      summary="Получение Новости",
     *      @OA\Parameter(
     *          name="id",
     *          description="id news",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourceDetail")
     *       ),
     * )
     */
    public function show(News $news): array
    {
        $detailNews = new NewsResource($news);
        $outherNews = News::where('id', '!=', $news->id)->where('is_active', true)->orderBy('date', 'DESC')->paginate(8);
        return [
            'item'     => $detailNews,
            'ourItems' => $outherNews,
        ];
    }
}
