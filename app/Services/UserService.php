<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class UserService
{
    /** @var UserRepository $useRepository */
    protected $useRepository;
    
    public function __construct(
        UserRepository $userRepository
    ) {
        $this->useRepository = $userRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->useRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->useRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->useRepository->updateById($userId, $params);
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
        return $this->useRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->useRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->useRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
}
