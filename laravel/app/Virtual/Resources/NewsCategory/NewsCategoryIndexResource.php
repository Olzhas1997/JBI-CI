<?php

namespace App\Virtual\Resources\NewsCategory;

use App\Virtual\Models\News\NewsCategory;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsCategoryIndexResource",
 *     description="NewsCategoryIndexResource",
 *     @OA\Xml(
 *         name="NewsCategoryIndexResource"
 *     )
 * )
 */
class NewsCategoryIndexResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var NewsCategory[]
     */
    public $data;
}
