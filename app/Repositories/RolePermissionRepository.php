<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class RolePermissionRepository extends BaseRepository
{
    public function __construct(RolePermission $model)
    {
        $this->model = $model;
    }
    public function getAll(){
        return $this->model->all();
    }
    public function deleteAllByRoleId($role_id){
        return $this->model->where('role_id',$role_id)->delete();
    }
    public function deleteAllByPermissionId($permission_id){
        return $this->model->where('permission_id',$permission_id)->delete();
    }
}
