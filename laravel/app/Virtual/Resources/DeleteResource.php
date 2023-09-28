<?php

namespace App\Virtual\Resources;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     title="DeleteResource",
 *     description="Delete Resource",
 *     @OA\Xml(
 *         name="DeleteResource"
 *     )
 * )
 */
class DeleteResource
{
    /**
     * @OA\Property(
     *     title="Data",
     *     description="data"
     * )
     *
     * @var DeleteAnswerResource
     */
    private $data;
}
