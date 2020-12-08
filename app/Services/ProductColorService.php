<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Product\ColorRepository;

class ProductColorService
{
    protected $colorRepository;
    
    public function __construct(
        ColorRepository $colorRepository
    ) {
        $this->colorRepository = $colorRepository;
    }

    public function findUserById($id)
    {
        return $this->colorRepository->find($id);
    }

    public function getListWithDataTable($params) {
        return $this->colorRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->colorRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa màu sắc thành công');
        }
        return Common::errorResponse('Xóa màu sắc thất bại');
    }
}
