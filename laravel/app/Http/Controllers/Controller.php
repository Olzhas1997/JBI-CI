<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *     title="JBI-3",
 *     version="0.1",
 *      @OA\Contact(
 *          email="admin@mail.ru"
 *      ),
 * ),
 *  @OA\Server(
 *      description="JBI-3",
 *      url="http://localhost:8083/api/"
 *  ),
 */
class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
