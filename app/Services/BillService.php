<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Bill\BillRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;

class BillService
{
    /** @var BillRepository $billRepository */
    protected $billRepository;
    
    public function __construct(
        BillRepository $billRepository
    ) {
        $this->billRepository = $billRepository;
    }
    /**
     * @param $id
     * @return User|null
     */
    public function findUserById($id)
    {
        return $this->billRepository->find($id);
    }

    public function getUserByEmail($email)
    {
        return $this->billRepository->getByEmail($email);
    }
    /**
     * @param $userId
     * @param array $params
     * @return Model
     */
    public function updateUserInfo($userId, $params)
    {
        return $this->billRepository->updateById($userId, $params);
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
        return $this->billRepository->create($input);
    }

    public function getListWithDataTable($params) {
        return $this->billRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->billRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa người dùng thành công');
        }
        return Common::errorResponse('Xóa người dùng thất bại');
    }
}
