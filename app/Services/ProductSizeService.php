<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Product\ProductSizeRepository;
use App\Repositories\Product\SizeRepository;

class ProductSizeService
{
    protected $sizeRepository;
    protected $productSizeRepository;
    public function __construct(
        SizeRepository $sizeRepository,
        ProductSizeRepository $productSizeRepository
    ) {
        $this->sizeRepository = $sizeRepository;
        $this->productSizeRepository = $productSizeRepository;
    }

    public function findUserById($id)
    {
        return $this->sizeRepository->find($id);
    }

    public function getListWithDataTable($params) {
        return $this->sizeRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->sizeRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa size thành công');
        }
        return Common::errorResponse('Xóa size thất bại');
    }
    public function apiGetAllSize($params) {
        return $this->sizeRepository->getAll($params);
    }
}
