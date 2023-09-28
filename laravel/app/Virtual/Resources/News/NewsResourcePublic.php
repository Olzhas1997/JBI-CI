<?php

namespace App\Virtual\Resources\News;

use App\Virtual\Models\News\News;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsResourcePublic",
 *     description="News resource",
 *     @OA\Xml(
 *         name="NewsResourcePublic"
 *     )
 * )
 */
class NewsResourcePublic
{
    /**
     * @OA\Property(
     *     title="current_page",
     *     description="Текущая страница",
     *     example=1
     * )
     * @var integer
     */
    public $current_page;
    /**
     * @OA\Property(
     *     title="data",
     *     description="data"
     * )
     *
     * @var News[]
     */
    private $data;

    /**
     * @OA\Property(
     *     title="last_page",
     *     description="Номер последней страницы",
     *     example=4
     * )
     * @var integer
     */
    public $last_page;
}
