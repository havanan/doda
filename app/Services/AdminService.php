<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\AdminRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class AdminService
{
    /** @var AdminRepository $adminRepository */
    protected $adminRepository;
    
    public function __construct(
        AdminRepository $adminRepository
    ) {
        $this->adminRepository = $adminRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->adminRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->adminRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->adminRepository->updateById($userId, $params);
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
        return $this->adminRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->adminRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->adminRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
}
