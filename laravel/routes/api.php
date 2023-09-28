<?php

use App\Http\Controllers\Admin\AdminDocumentCategoryController;
use App\Http\Controllers\Admin\AdminDocumentController;
use App\Http\Controllers\Admin\AdminDocumentGroupController;
use App\Http\Controllers\Admin\AdminNewsCategoryController;
use App\Http\Controllers\Admin\AdminNewsController;
use App\Http\Controllers\Admin\AdminPageController;
use App\Http\Controllers\Admin\FileController;
use App\Http\Controllers\Admin\ImageTemplateController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Public\PublicDocumentController;
use App\Http\Controllers\Public\PublicNewsCategoryController;
use App\Http\Controllers\Public\PublicNewsController;
use App\Http\Controllers\Public\PublicPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->name('v1.')->group(function () {
    Route::prefix('auth')->name('auth.')->group(function () {
        Route::controller(AuthController::class)->group(function () {
            Route::post('login', 'login')->name('login');
            Route::post('logout', 'logout')->name('logout');
            Route::post('refresh', 'refresh')->name('refresh');
        });
    });

    Route::middleware('auth:api')->group(function () {
        Route::prefix('admin')->name('admin.')->group(function () {
            Route::apiResource('image-templates', ImageTemplateController::class);
            Route::apiResource('news', AdminNewsController::class);
            Route::apiResource('news-categories', AdminNewsCategoryController::class);
            Route::apiResource('pages', AdminPageController::class);
            Route::apiResource('documents', AdminDocumentController::class);
            Route::apiResource('document-categories', AdminDocumentCategoryController::class);
            Route::apiResource('document-groups', AdminDocumentGroupController::class);
            Route::post('file', [FileController::class, 'store'])->name('file.upload');
        });
    });

    Route::prefix('public')->name('public.')->group(function () {
        Route::apiResource('news', PublicNewsController::class)->only(['index', 'show'])->scoped(['news' => 'slug']);
        Route::apiResource('pages', PublicPageController::class)->only(['index', 'show'])->scoped(['page' => 'slug']);
        Route::apiResource('documents', PublicDocumentController::class)->only(['index', 'show']);
        Route::get('document-categories', [AdminDocumentCategoryController::class, 'index']);
        Route::get('document-groups', [AdminDocumentGroupController::class, 'index']);
        Route::get('news-categories', [PublicNewsCategoryController::class, 'index']);
        Route::post('file', [FileController::class, 'show'])->name('file');
    });
});
