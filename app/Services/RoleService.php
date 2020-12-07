<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\RoleRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class RoleService
{
    /** @var RoleRepository $roleRepository */
    protected $roleRepository;
    
    public function __construct(
        RoleRepository $roleRepository
    ) {
        $this->roleRepository = $roleRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->roleRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->roleRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->roleRepository->updateById($userId, $params);
    }

    /**
     * @param $input
     * @return User
     */
    public function createUser($input)
    {
        if (!isset($input['password'])) {
            $input['password'] = bcrypt('abcd1234');
        }
        return $this->roleRepository->create($input);
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
}
