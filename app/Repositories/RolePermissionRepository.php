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
}
