<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\ProductSize;
use App\Models\Size;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class SizeRepository extends BaseRepository
{
    public function __construct(Size $model)
    {
        $this->model = $model;
    }
    /**
     * @param $user
     * @param $data
     * @return Collection
     */
    public function updateInfo($user, $data)
    {
        $user->fill($data)->save();
        return $user;
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

    public function getAll($params){
        $status = 1;
        if (isset($params['status']) && $params['status'] != null) {
            $status = $params['status'];
        }
        return $this->model->select('type','id')->selectRaw('ROUND(name,2) as name')->where('status',$status)->orderBy('name')->get();
    }

}
