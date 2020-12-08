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

    public function updateInfo($id, $params)
    {
        $input = [
            'name' => $params['name'],
            'note' =>$params['note'],
            'slug' => Str::slug($params['name'])
        ];
        $this->roleRepository->updateById($id, $input);
        $permission_ids = $params['permission_id'];
        $rolePermission = $this->mergeRolePermission($id,$permission_ids);
        if (!empty($rolePermission)) {
            $this->rolePermissionRepository->deleteAllByRoleId($id);
            $this->rolePermissionRepository->insertMulti($rolePermission);
        }
        return $rolePermission;
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
    public function getPermissionIdsByRole($role_id){
        return $this->permissionRepository->getIdsByRole($role_id);
    }
    public function createRole($params) {
        $input = [
            'name' => $params['name'],
            'note' =>$params['note'],
            'slug' => Str::slug($params['name'])
        ];
        $permission_ids = $params['permission_id'];
        $role = $this->roleRepository->create($input);
        $rolePermission = $this->mergeRolePermission($role->id,$permission_ids);
        if (!empty($rolePermission)) {
            $this->rolePermissionRepository->insertMulti($rolePermission);
        }
        return $rolePermission;
    }
    public function mergeRolePermission($role_id,$permission_ids){
        $rolePermission = [];

        if (!empty($permission_ids)){
            foreach ($permission_ids as $key => $id) {
                $item = [
                    'permission_id' => $id,
                    'role_id' => $role_id
                ];
                array_push($rolePermission,$item);
            }
        }
        return $rolePermission;
    }
}
