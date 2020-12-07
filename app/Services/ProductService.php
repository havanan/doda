<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Product\ProductRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class ProductService
{
    /** @var ProductRepository $productRepository */
    protected $productRepository;
    
    public function __construct(
        ProductRepository $productRepository
    ) {
        $this->productRepository = $productRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->productRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->productRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->productRepository->updateById($userId, $params);
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
        return $this->productRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->productRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->productRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
}
