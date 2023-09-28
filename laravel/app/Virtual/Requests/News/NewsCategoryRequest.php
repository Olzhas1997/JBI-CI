<?php

namespace App\Virtual\Requests\News;

/**
 * @OA\Schema(
 *      title="NewsCategoryRequest",
 *      description="Тело запроса",
 *      type="object",
 *      required={"title"}
 * )
 */
class NewsCategoryRequest
{
    /**
     * @OA\Property(
     *      title="title",
     *      description="Название категории",
     *      example="Акции"
     * )
     *
     * @var string
     */
    public $title;
}
