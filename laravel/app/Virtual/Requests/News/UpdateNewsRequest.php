<?php

namespace App\Virtual\Requests\News;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *      title="UpdateNewsRequest",
 *      description="Тело запроса",
 *      type="object",
 *      required={"title", "is_active"}
 * )
 */
class UpdateNewsRequest
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
     *      title="type",
     *      description="Тип новости",
     *      example="маленькая|большая"
     * )
     *
     * @var string
     */
    public $type;

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

    /**
     * @OA\Property(
     *     title="date",
     *     description="Дата новости",
     *     example="2023-09-12"
     * )
     * @var \DateTime
     */
    public $date;

    /**
     * @OA\Property(
     *     title="preview_img",
     *     description= "Превью картинка",
     *     example="[]"
     * )
     * @var string
     */
    public $preview_img;

    /**
     * @OA\Property(
     *     title="detail_img",
     *     description= "Детальная картинка",
     *     example="[]"
     * )
     * @var string
     */
    public $detail_img;

    /**
     * @OA\Property(
     *     title="content",
     *     description= "Контент",
     *     example="[]"
     * )
     * @var string
     */
    public $content;

    /**
     * @OA\Property(
     *     title="preview_text",
     *     description= "Превью текст",
     *     example="[]"
     * )
     * @var string
     */
    public $preview_text;

    /**
     * @OA\Property(
     *     title="detail_text",
     *     description= "Детальный текст",
     *     example="[]"
     * )
     * @var string
     */
    public $detail_text;
}
