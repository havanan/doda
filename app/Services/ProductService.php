<?php

namespace App\Services;

use App\Helpers\Common;
use App\Repositories\Product\ProductColorRepository;
use App\Repositories\Product\ProductRepository;
use App\Repositories\Product\ProductSizeRepository;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ProductService
{
    /** @var ProductRepository $productRepository */
    protected $productRepository;
    protected $productSizeRepository;
    protected $productColorRepository;

    public function __construct(
        ProductRepository $productRepository,
        ProductSizeRepository $productSizeRepository,
        ProductColorRepository $productColorRepository
    ) {
        $this->productRepository = $productRepository;
        $this->productSizeRepository = $productSizeRepository;
        $this->productColorRepository = $productColorRepository;
    }
    
    public function getListWithDataTable($params) {
        $data = $this->productRepository->getListWithDataTable($params);
        return $data;
    }

    public function deleteById($id){
        $action = $this->productRepository->delete($id);
        if ($action) {
            return Common::successResponse('Xóa sản phẩm thành công');
        }
        return Common::errorResponse('Xóa sản phẩm thất bại');
    }
    public function create($params){
        $name = $params['name'];
        $color = $params['color'];
        $slug = isset($params['slug']) ? $params['slug'] : null;
        if ($params['slug'] == null) {
            $slug = Str::slug($name);
        }else {
            $slug = Str::slug($slug);
        }
        $params['intro'] = htmlspecialchars($params['intro']);
        $params['slug'] = $slug;
        unset($params['color']);
        $product = $this->productRepository->create($params);
        $product_id = $product->id;
        //tạo màu theo sp
        $this->createProductColor($color,$product_id);
    }
    public function createProductColor($params,$product_id) {
        $result = [];
        if (empty($params)){
            return $result;
        }
        foreach ($params as $key => $item) {
            if ($item['name'] == null) {
                return $result;
            }
            $sizes = $item['sizes'];
            $colorInput = [
                'image' => $item['avatar'],
                'name'   => $item['name'],
                'slug'   => Str::slug($item['name']),
                'available' => $item['available'] ? $item['available'] : 0,
                'product_id' => $product_id
            ];
            $color = $this->productColorRepository->create($colorInput);
            //tạo size theo màu
            $result[] = $this->createColorSize($sizes,$color->id,$product_id);
        }
        return  $result;
    }
    public function createColorSize($params,$color_id,$product_id){

        $result = [];
        if (!empty($params)){
            return $result;
        }
        foreach ($params as $size){
            if (empty($size)){
                return  $result;
            }
            $size['slug'] = Str::slug($size['name']);
            $size['status'] = 1;
            $size['product_id'] = $product_id;
            $size['product_color_id'] = $color_id;
            $result[] = $this-> productSizeRepository = $size;
        }
        return $result;
    }
}
