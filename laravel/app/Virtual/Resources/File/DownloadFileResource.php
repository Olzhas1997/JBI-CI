<?php

namespace App\Virtual\Resources\File;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 * title="DownloadFileResource",
 * description="DownloadFileResource",
 * @OA\Xml(
 * name="DownloadFileResource"
 * )
 * )
 */
class DownloadFileResource
{
    /**
     * @OA\Property(
     *     title="file",
     *     description="file",
     *     format="binary"
     * )
     */
    public $file;
}
