<?php

namespace App\Virtual\Resources\News;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsResource",
 *     description="News resource",
 *     @OA\Xml(
 *         name="NewsResource"
 *     )
 * )
 */
class NewsResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var \App\Virtual\Models\News\News[]
     */
    private $none_data;
}
