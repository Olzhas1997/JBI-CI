<?php

namespace App\Virtual\Resources\NewsCategory;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 * title="NewsCategoryItemResource",
 * description="NewsCategory",
 * @OA\Xml(
 * name="NewsCategory"
 * )
 * )
 */
class NewsCategoryDeleteAnswerResource
{
    /**
     * @OA\Property(
     *     title="success",
     *     description="success",
     *     format="bool",
     *     example=true
     * )
     *
     * @var integer
     */
    private $success;
}
