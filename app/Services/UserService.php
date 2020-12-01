<?php

namespace App\Services;

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
        return $this->useRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->useRepository->getListWithDataTable($params);
    }
}
