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
    
    public function getListWithDataTable($params) {
        return $this->productRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->productRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa sản phẩm thành công');
        }
        return Common::errorResponse('Xóa sản phẩm thất bại');
    }
}
