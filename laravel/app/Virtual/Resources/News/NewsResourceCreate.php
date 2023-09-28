<?php

namespace App\Virtual\Resources\News;

use App\Virtual\Models\News\NewsCreate;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsResourceCreate",
 *     description="News resource",
 *     @OA\Xml(
 *         name="NewsResourceCreate"
 *     )
 * )
 */
class NewsResourceCreate
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var NewsCreate
     */
    private $data;
}
