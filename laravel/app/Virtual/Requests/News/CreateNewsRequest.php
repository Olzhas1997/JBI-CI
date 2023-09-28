<?php

namespace App\Virtual\Requests\News;
/**
 * @OA\Schema(
 *      title="CreateNewsRequest",
 *      description="Тело запроса",
 *      type="object",
 *      required={"title", "is_active"}
 * )
 */
class CreateNewsRequest
{
    /**
     * @OA\Property(
     *      title="title",
     *      description="Название новости",
     *      example="JBI-3"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *      title="is_active",
     *      description="Активность новости",
     *      example=true
     * )
     *
     * @var boolean
     */
    public $is_active;
}
