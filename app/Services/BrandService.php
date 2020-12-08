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

    public function findById($id)
    {
        return $this->brandRepository->find($id);
    }

    public function getListWithDataTable($params) {
        return $this->brandRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->brandRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa thương hiệu thành công');
        }
        return Common::errorResponse('Xóa thương hiệu thất bại');
    }
    public function create($params) {
        if (!isset($params['status'])) {
            $params['status'] = ACTIVE;
        }
        return $this->brandRepository->create($params);
    }
    public function update($id,$params) {
        return $this->brandRepository->updateById($id,$params);
    }
}
