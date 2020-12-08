<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Models\Role;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class RoleRepository extends BaseRepository
{
    public function __construct(Role $model)
    {
        $this->model = $model;
    }
    public function getAll(){
        return $this->model->all();
    }

    /**
     * @param $user
     * @param $data
     * @return Collection
     */
    public function updateUserInfo($user, $data)
    {
        $user->fill($data)->save();
        return $user;
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

}
