<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Models\Brand;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class BrandRepository extends BaseRepository
{
    public function __construct(Brand $model)
    {
        $this->model = $model;
    }

    public function getListWithDataTable($params) {

        $paginate = Common::toPagination($params);

        $query = $this->model->orderBy($paginate['sort'], $paginate['order']);

        if (isset($paginate['search'])) {
            $query->orWhere('name', 'like', "%" . $paginate['search'] . "%");
        }
        $query = $query->skip($paginate['start'])->take($paginate['limit'])->get();
        $total = $this->model->count();
        return Common::toJson($query,$total);
    }
    public function getAll($params){
        $status = ACTIVE;
        if (isset($params['status']) && $params['status'] != null) {
            $status = $params['status'];
        }
        return $this->model->select('name','slug','avatar','id')->where('status',$status)->get();
    }

}
