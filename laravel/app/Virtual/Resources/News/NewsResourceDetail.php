<?php

namespace App\Virtual\Resources\News;

use App\Virtual\Models\News\News;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsResourceDetail",
 *     description="News resource",
 *     @OA\Xml(
 *         name="NewsResourceDetail"
 *     )
 * )
 */
class NewsResourceDetail
{

    /**
     * @OA\Property(
     *     title="item",
     *     description="data"
     * )
     *
     * @var News
     */
    private $item;

    /**
     * @OA\Property(
     *     title="ourItems",
     *     description="Остальные новости"
     * )
     * @var NewsResourcePublic
     */
    public $ourItems;

}
