<?php

namespace App\Virtual\Requests\Page;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *      title="PageRequest",
 *      description="Тело запроса",
 *      type="object",
 *      required={"title"}
 * )
 */
class PageRequest
{
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
     *     example="text"
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
