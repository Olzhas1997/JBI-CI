<?php

namespace App\Virtual\Models\News;
/**
 * @OA\Schema(
 * title="NewsCreate",
 * description="Модель новости",
 * @OA\Xml(
 * name="NewsCreate"
 * )
 * )
 */
class NewsCreate
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
     *      example="Создатели заправляют"
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

    /**
     * @OA\Property(
     *     title= "slug",
     *     description="Преобразованное название для ссылки",
     *     example="sozdateli-zapravlyayut"
     * )
     *
     * @var string
     */

    public $slug;

    /**
     * @OA\Property(
     *     title="date",
     *     description="Дата новости",
     *     example=null
     * )
     * @var \DateTime
     */

    public $date;

    /**
     * @OA\Property(
     *     title="preview_img",
     *     description= "Превью картинка",
     *     example=null
     * )
     * @var string
     */

    public $preview_img;

    /**
     * @OA\Property(
     *     title="detail_img",
     *     description= "Детальная картинка",
     *     example=null
     * )
     * @var string
     */

    public $detail_img;

    /**
     * @OA\Property(
     *     title="content",
     *     description= "Контент",
     *     example=null
     * )
     * @var string
     */

    public $content;

    /**
     * @OA\Property(
     *     title="preview_text",
     *     description= "Превью текст",
     *     example=null
     * )
     * @var string
     */
    public $preview_text;

    /**
     * @OA\Property(
     *     title="detail_text",
     *     description= "Детальный текст",
     *     example=null
     * )
     * @var string
     */
    public $detail_text;
}
