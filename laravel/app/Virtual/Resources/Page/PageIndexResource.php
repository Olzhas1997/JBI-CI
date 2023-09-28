<?php

namespace App\Virtual\Resources\Page;

use App\Virtual\Models\Page\Page;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="PageIndexResource",
 *     description="PageIndex resource",
 *     @OA\Xml(
 *         name="PageIndexResource"
 *     )
 * )
 */
class PageIndexResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var Page[]
     */
    private $data;
}
