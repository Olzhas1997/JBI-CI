<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(UserLoginRequest $request): JsonResource|JsonResponse
    {
        $token = Auth::attempt($request->validated());
        return empty($token)
            ? response()->json(['message' => 'Unauthorized'], 401)
            : response()->json(['token' => $token, 'type'  => 'bearer']);
    }

    public function logout(): JsonResponse
    {
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh(): JsonResponse
    {
        return response()->json(['token' => Auth::refresh(), 'type'  => 'Bearer']);
    }
}
