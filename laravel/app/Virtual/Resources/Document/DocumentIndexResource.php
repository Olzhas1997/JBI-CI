<?php

namespace App\Virtual\Resources\Document;

use App\Virtual\Models\Document\Document;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="DocumentIndexResource",
 *     description="DocumentIndex resource",
 *     @OA\Xml(
 *         name="DocumentIndexResource"
 *     )
 * )
 */
class DocumentIndexResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var Document[]
     */
    private $data;
}
