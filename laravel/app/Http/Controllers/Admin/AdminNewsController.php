<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\News\CreateNewsRequest;
use App\Http\Requests\News\UpdateNewsRequest;
use App\Http\Resources\News\AdminIndexNewsResource;
use App\Http\Resources\News\NewsResource;
use App\Models\News;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminNewsController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/news/",
     *      summary="Получение списка новостей",
     *      description="Возвращает список новостей",
     *      tags={"Admin/News"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResource")
     *         )
     *      ),
     * )
     */
    public function index(): AnonymousResourceCollection
    {
        return AdminIndexNewsResource::collection(News::with('newsCategory')->orderBy('id', 'ASC')->get());
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/news/{id}",
     *      tags={"Admin/News"},
     *      summary="Получение новости",
     *      @OA\Parameter(
     *          name="id",
     *          description="id новости",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourceOne")
     *       ),
     * )
     */
    public function show(News $news): NewsResource
    {
        return NewsResource::make($news);
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/news/",
     *      tags={"Admin/News"},
     *      summary="Добавление новой новости",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateNewsRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourceOne")
     *       ),
     * )
     */
    public function store(CreateNewsRequest $request): NewsResource
    {
        return NewsResource::make(News::create($request->validated()));
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/news/${id}",
     *      tags={"Admin/News"},
     *      summary="Обновление данных новости",
     *      @OA\Parameter(
     *          name="id",
     *          description="id новости",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/UpdateNewsRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourceOne")
     *       ),
     * )
     */
    public function update(News $news, UpdateNewsRequest $request): NewsResource
    {
        $news->update($request->validated());
        return NewsResource::make($news);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/news/${id}",
     *      tags={"Admin/News"},
     *      summary="Удаление новости",
     *      @OA\Parameter(
     *          name="id",
     *          description="id новости",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/NewsResourceOne")
     *       ),
     * )
     */
    public function destroy(News $news): JsonResource
    {
        return JsonResource::make(['success' => $news->delete()]);
    }
}
