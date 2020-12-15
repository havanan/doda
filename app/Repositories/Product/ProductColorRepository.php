<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\Product;
use App\Models\ProductColor;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class ProductColorRepository extends BaseRepository
{
    public function __construct(ProductColor $model)
    {
        $this->model = $model;
    }
}
