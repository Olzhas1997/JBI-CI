<?php

namespace App\Virtual\Models\News;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 * title="News",
 * description="Модель новости",
 * @OA\Xml(
 * name="News"
 * )
 * )
 */
class News
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
     *      description="Название новости",
     *      example="JBI"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *      title="type",
     *      description="Тип новости",
     *      example="Тип новости"
     * )
     *
     * @var string
     */
    public $type;

    /**
     * @OA\Property(
     *     title="category_id",
     *     description="category_id",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $category_id;

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
     *     title= "slug",
     *     description="Преобразованное название для ссылки",
     *     example="test-news"
     * )
     *
     * @var string
     */
    public $slug;

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
     * )
     * @var string
     */
    public $preview_text;

    /**
     * @OA\Property(
     *     title="detail_text",
     *     description= "Детальный текст",
     * )
     * @var string
     */
    public $detail_text;
}
