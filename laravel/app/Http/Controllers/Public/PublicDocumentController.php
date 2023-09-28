<?php

namespace App\Http\Controllers\Public;

use App\Filters\DocumentFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Document\FilterDocumentRequest;
use App\Http\Resources\Document\DocumentListResource;
use App\Http\Resources\Document\DocumentResource;
use App\Virtual\Models\Document\Document;
use Illuminate\Support\Collection;
use OpenApi\Annotations as OA;

class PublicDocumentController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/public/documents",
     *      summary="Получение списка документов",
     *      description="Возвращает список документов",
     *      tags={"Public/Document"},
     *      @OA\Parameter(
     *          name="f[category_id]",
     *          description="id категории документа",
     *          required=false,
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Parameter(
     *          name="all",
     *          description="вывести без пагинации",
     *          required=false,
     *          in="query",
     *          @OA\Schema(
     *              type="boolean"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentWithGroupResource")
     *         )
     *      ),
     * )
     */
    public function index(FilterDocumentRequest $request): Collection
    {
        $documentRequestFilter = new DocumentFilter(Document::class, $request->all());
        $documents = $documentRequestFilter->filter();
        return collect(DocumentListResource::collection($documents))->groupBy('group');
    }

    /**
     * @OA\Get(
     *      path="/api/v1/public/documents/{id}",
     *      tags={"Public/Document"},
     *      summary="Получение группы документов",
     *      @OA\Parameter(
     *          name="id",
     *          description="id документа",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/DocumentResource")
     *       ),
     * )
     */
    public function show(Document $document): DocumentResource
    {
        return DocumentResource::make($document);
    }
}
