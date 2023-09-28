<?php

namespace App\Virtual\Requests\Document;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *      title="DocumentRequest",
 *      description="Тело запроса",
 *      type="object",
 *      required={"title", "is_active"}
 * )
 */
class DocumentRequest
{
    /**
     * @OA\Property(
     *      title="title",
     *      description="Название документа",
     *      example="JBI"
     * )
     *
     * @var string
     */
    public $title;

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
     *     title="group_id",
     *     description="group_id",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $group_id;

    /**
     * @OA\Property(
     *      title="is_active",
     *      description="Активность файла",
     *      example=true
     * )
     *
     * @var boolean
     */
    public $is_active;
    /**
     * @OA\Property(
     *     title="date",
     *     description="Дата файла",
     *     example="2023-09-12"
     * )
     * @var \DateTime
     */

    public $date;
    /**
     * @OA\Property(
     *     title="file",
     *     description= "file",
     *     example="[]"
     * )
     * @var string
     */
    public $file;
}
