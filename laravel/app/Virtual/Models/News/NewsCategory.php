<?php

namespace App\Virtual\Models\News;

/**
 * @OA\Schema(
 * title="NewsCategory",
 * description="Модель категорий новостей",
 * @OA\Xml(
 * name="NewsCategory"
 * )
 * )
 */
class NewsCategory
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
     *      description="Название категории",
     *      example="интересное"
     * )
     *
     * @var string
     */
    public $title;
}
