<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\PermissionRepository;
use App\Repositories\RolePermissionRepository;
use App\Repositories\RoleRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class RoleService
{
    /** @var RoleRepository $roleRepository */
    protected $roleRepository;
    protected $permissionRepository;
    protected $rolePermissionRepository;
    public function __construct(
        RoleRepository $roleRepository,
        PermissionRepository $permissionRepository,
        RolePermissionRepository $rolePermissionRepository
    ) {
        $this->roleRepository = $roleRepository;
        $this->permissionRepository = $permissionRepository;
        $this->rolePermissionRepository = $rolePermissionRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findById($id)
    {
        return $this->roleRepository->find($id);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateInfo($userId, $params)
    {
        return $this->roleRepository->updateById($userId, $params);
    }

    public function getListWithDataTable($params) {
        return $this->roleRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->roleRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
    public function getAll(){
        return $this->roleRepository->getAll();
    }
    public function getAllPermission(){
        return $this->permissionRepository->getAll();
    }
    public function createRole($params) {
        $input = [
            'name' => $params['name'],
            'note' =>$params['note'],
            'slug' => Str::slug($params['name'])
        ];
        $permission_ids = $params['permission_id'];
        $role = $this->roleRepository->create($input);

        $rolePermission = [];
        if (!empty($permission_ids)){
            foreach ($permission_ids as $key => $id) {
                $item = [
                    'permission_id' => $id,
                    'role_id' => $role->id
                ];
                array_push($item,$rolePermission);
            }
        }
        if (!empty($rolePermission)) {
            $this->rolePermissionRepository->create($rolePermission);
        }
        return $rolePermission;
    }
}
