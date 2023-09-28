<?php

namespace App\Virtual\Resources\Document;

use App\Virtual\Models\Document\Document;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="DocumentWithGroupResource",
 *     description="DocumentWithGroup resource",
 *     @OA\Xml(
 *         name="DocumentWithGroupResource"
 *     )
 * )
 */
class DocumentWithGroupResource
{
    /**
     * @OA\Property(
     *     title="group1",
     *     description="group1"
     * )
     *
     * @var Document[]
     */
    private $group1;

    /**
     * @OA\Property(
     *     title="group2",
     *     description="group2"
     * )
     *
     * @var Document[]
     */
    private $group2;
}
