<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\BrandRepository;
class BrandService
{
    /** @var BrandRepository $brandRepository */
    protected $brandRepository;
    
    public function __construct(
        BrandRepository $brandRepository
    ) {
        $this->brandRepository = $brandRepository;
    }

    public function findUserById($id)
    {
        return $this->brandRepository->find($id);
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
