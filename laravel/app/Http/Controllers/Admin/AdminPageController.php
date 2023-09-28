<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest;
use App\Http\Resources\Page\PageResource;
use App\Models\Page;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use OpenApi\Annotations as OA;

class AdminPageController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/admin/pages",
     *      summary="Получение списка pages",
     *      description="Возвращает список pages",
     *      tags={"Admin/Page"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageIndexResource")
     *         )
     *      ),
     * )
     */
    public function index(): AnonymousResourceCollection
    {
        return PageResource::collection(Page::all());
    }

    /**
     * @OA\Post(
     *      path="/api/v1/admin/pages",
     *      tags={"Admin/Page"},
     *      summary="Добавление page",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/PageRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageResource")
     *       ),
     * )
     */
    public function store(PageRequest $request): PageResource
    {
        return PageResource::make(Page::create($request->validated()));
    }

    /**
     * @OA\Get(
     *      path="/api/v1/admin/pages/{id}",
     *      tags={"Admin/Page"},
     *      summary="Получение page",
     *      @OA\Parameter(
     *          name="id",
     *          description="id page",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageResource")
     *       ),
     * )
     */
    public function show(Page $page): PageResource
    {
        return PageResource::make($page);
    }

    /**
     * @OA\Put(
     *      path="/api/v1/admin/pages/{id}",
     *      tags={"Admin/Page"},
     *      summary="Обновление page",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/PageRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/PageResource")
     *       ),
     * )
     */
    public function update(
        Page $page,
        PageRequest $request): PageResource
    {
        $page->update($request->validated());
        return PageResource::make($page);
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/admin/pages/{id}",
     *      tags={"Admin/Page"},
     *      summary="Удаление page",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DeleteResource")
     *       ),
     * )
     */
    public function destroy(Page $page): JsonResource
    {
        return JsonResource::make(['success' => $page->delete()]);
    }
}
