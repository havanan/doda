<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\Product;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository extends BaseRepository
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function getListWithDataTable($params) {

        $paginate = Common::toPagination($params);

        $query = $this->model->orderBy($paginate['sort'], $paginate['order']);

        if (isset($paginate['search'])) {
            $query->where('name', 'like', "%" . $paginate['search'] . "%");
        }
        $query = $query->skip($paginate['start'])->with(['cat','brand'])->take($paginate['limit'])->get();
        $total = $this->model->count();
        return Common::toJson($query,$total);
    }
    public function apiGetInfo($id){
        return $this->model->with(['brand','cat','colors'])->find($id);
    }
}
