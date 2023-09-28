<?php

namespace App\Virtual\Resources\News;

use App\Virtual\Models\News\News;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsResourceOne",
 *     description="News resource",
 *     @OA\Xml(
 *         name="NewsResourceOne"
 *     )
 * )
 */
class NewsResourceOne
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var News
     */
    private $data;
}
