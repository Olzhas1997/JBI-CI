<?php

namespace App\Virtual\Resources;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 * title="DeleteAnswerResource",
 * description="DeleteAnswerResource",
 * @OA\Xml(
 * name="DeleteAnswerResource"
 * )
 * )
 */
class DeleteAnswerResource
{
    /**
     * @OA\Property(
     *     title="success",
     *     description="success",
     *     format="bool",
     *     example=true
     * )
     *
     * @var integer
     */
    private $success;
}
