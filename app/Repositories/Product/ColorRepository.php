<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\ProductColor;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class ColorRepository extends BaseRepository
{
    public function __construct(ProductColor $model)
    {
        $this->model = $model;
    }
    public function getListWithDataTable($params) {

        $paginate = Common::toPagination($params);

        $query = $this->model->orderBy($paginate['sort'], $paginate['order']);

        if (isset($paginate['search'])) {

            $query->where('email', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('phone', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('name', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('address_1', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('address_2', 'like', "%" . $paginate['search'] . "%");

        }
        $query = $query->skip($paginate['start'])->take($paginate['limit'])->get();
//         $query = $query->skip($paginate['start'])->paginate($paginate['limit']);
//        dd($query);
        $total = $this->model->count();
        return Common::toJson($query,$total);
    }

}
