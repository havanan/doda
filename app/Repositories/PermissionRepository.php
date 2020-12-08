<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Models\Permission;
use App\Models\Role;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class PermissionRepository extends BaseRepository
{
    public function __construct(Permission $model)
    {
        $this->model = $model;
    }
    public function getAll(){
        return $this->model->all();
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
    public function getIdsByRole($role_id){
        return $this->model->join('role_permissions','role_permissions.permission_id','permissions.id')->where('role_permissions.role_id',$role_id)->pluck('permissions.name','permissions.id')->toArray();
    }

}
