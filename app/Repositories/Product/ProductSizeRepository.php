<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\ProductSize;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class ProductSizeRepository extends BaseRepository
{
    public function __construct(ProductSize $model)
    {
        $this->model = $model;
    }
}
