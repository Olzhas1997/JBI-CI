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
class NewsCategoryItemResource
{
    /**
     * @OA\Property(
     *     title="id",
     *     description="id",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *      title="title",
     *      description="Название категории новости",
     *      example="интересное"
     * )
     *
     * @var string
     */
    public $title;
}
