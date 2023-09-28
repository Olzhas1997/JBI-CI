<?php

namespace App\Virtual\Resources\NewsCategory;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="NewsCategoryResource",
 *     description="News Category Resource",
 *     @OA\Xml(
 *         name="NewsCategoryResource"
 *     )
 * )
 */
class NewsCategoryDeleteResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var NewsCategoryDeleteAnswerResource
     */
    private $data;
}
