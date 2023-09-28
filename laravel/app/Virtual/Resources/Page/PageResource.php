<?php

namespace App\Virtual\Resources\Page;

use App\Virtual\Models\Page\Page;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="PageResource",
 *     description="Page resource",
 *     @OA\Xml(
 *         name="PageResource"
 *     )
 * )
 */
class PageResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var Page
     */
    private $data;
}
