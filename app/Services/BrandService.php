<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\BrandRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class BrandService
{
    /** @var BrandRepository $brandRepository */
    protected $brandRepository;
    
    public function __construct(
        BrandRepository $brandRepository
    ) {
        $this->brandRepository = $brandRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->brandRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->brandRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->brandRepository->updateById($userId, $params);
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
        return $this->brandRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->brandRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->brandRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
}
