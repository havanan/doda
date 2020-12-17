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
    public function deleteByProductId($product_id){
        return $this->model->where('product_id',$product_id)->delete();
    }
}
