<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class NewsFilter extends Filter
{

    protected function filterQuery(): void
    {
        $this->query->where('is_active', true)
            ->when(isset($this->filter['category_id']), function ($q) {
            $q->whereIn('category_id', $this->filter['category_id']);
        });
    }

    protected function sortQuery(): void
    {
        $this->query->orderBy('date', 'DESC');
    }

    protected function buildQuery($params = null): Builder
    {
        $this->tmpParams = $params ?? $this->filter;

        return $this->query->clone();
    }

    protected function addRelations(): void
    {
        $this->query->with(['newsCategory']);
    }

    protected function buildFilters(): array
    {
        // TODO: Implement buildFilters() method.
    }
}
