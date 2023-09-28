<?php

namespace App\Virtual\Models\Page;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *      title="Page",
 *      description="Модель page",
 *      @OA\Xml(
 *          name="Page"
 *      )
 * )
 */
class Page
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
    public $id;

    /**
     * @OA\Property(
     *     title="title",
     *     description="title",
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *     title="slug",
     *     description="slug",
     * )
     *
     * @var string
     */
    public $slug;

    /**
     * @OA\Property(
     *     title="is_active",
     *     description="is_active",
     * )
     *
     * @var boolean
     */
    public $is_active;

    /**
     * @OA\Property(
     *     title="description",
     *     description="description",
     * )
     * @var string
     */
    public $description;

    /**
     * @OA\Property(
     *     title="content",
     *     description="content",
     *     example="json"
     * )
     * @var string
     */
    public $content;
}
