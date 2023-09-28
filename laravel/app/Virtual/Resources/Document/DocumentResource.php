<?php

namespace App\Virtual\Resources\Document;

use App\Virtual\Models\Document\Document;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="DocumentResource",
 *     description="Document resource",
 *     @OA\Xml(
 *         name="DocumentResource"
 *     )
 * )
 */
class DocumentResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var Document
     */
    private $data;
}
