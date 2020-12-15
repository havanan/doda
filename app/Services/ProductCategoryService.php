<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Product\CategoryRepository;
use Illuminate\Support\Str;

class ProductCategoryService
{
    protected $categoryRepository;
    
    public function __construct(
        CategoryRepository $categoryRepository
    ) {
        $this->categoryRepository = $categoryRepository;
    }
    public function create($params) {
        $params['slug'] = Str::slug($params['name']);
        return $this->categoryRepository->create($params);
    }
    public function findUserById($id)
    {
        return $this->categoryRepository->find($id);
    }

    public function getListWithDataTable($params) {
        return $this->categoryRepository->getListWithDataTable($params);
    }

    public function deleteById($id){
        $action = $this->categoryRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa loại sản phẩm thành công');
        }
        return Common::errorResponse('Xóa loại sản phẩm thất bại');
    }
    public function getParent(){
        return $this->categoryRepository->getAllParent();
    }
    public function updateById($id,$params) {
        $params['slug'] = Str::slug($params['name']);
        return $this->categoryRepository->updateById($id,$params);
    }
    public function apiGetAll($params){
        return $this->categoryRepository->getAll($params);
    }
}
