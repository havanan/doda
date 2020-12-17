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
        return  $this->productRepository->getListWithDataTable($params);
    }
    public function deleteById($id){
        //xóa size, màu của sp
       $this->deleteColorSize($id);
        //xóa sp
        return $this->productRepository->delete($id);
    }
    public function getProductInput($params){
        $name = $params['name'];
        $slug = isset($params['slug']) ? $params['slug'] : null;
        if ($params['slug'] == null) {
            $slug = Str::slug($name);
        }else {
            $slug = Str::slug($slug);
        }
        $params['intro'] = htmlspecialchars($params['intro']);
        $params['slug'] = $slug;
        unset($params['color']);
        return $params;
    }
    public function create($params){

        $product_input = $this->getProductInput($params);
        $product = $this->productRepository->create($product_input);
        $product_id = $product->id;
        //tạo màu
        if (isset($params['color']) ) {
            $color = $params['color'];
            //tạo màu theo sp
            $this->createProductColor($color,$product_id);
        }

    }
    public function createProductColor($params,$product_id) {
        $result = [];
        if (empty($params)){
            return $result;
        }
        foreach ($params as $key => $item) {
            if ($item['name'] == null) {
                 $result[$key] = null;
            }
            $colorInput = [
                'image' => $item['avatar'],
                'name'   => $item['name'],
                'slug'   => Str::slug($item['name']),
                'available' => $item['available'] ? $item['available'] : 0,
                'product_id' => $product_id
            ];
            //tạo màu
            $color = $this->productColorRepository->create($colorInput);

            if (isset( $item['sizes'])) {
                $sizes = $item['sizes'];
                //tạo size theo màu
                $result[$key] = $this->createColorSize($sizes,$color->id,$product_id);
            }
        }

        return  $result;
    }
    public function createColorSize($params,$color_id,$product_id){
        $result = [];
        if (empty($params)){
            return $result;
        }
        foreach ($params as $size){
            if (empty($size)){
                return  $result;
            }
            $size['slug'] = is_numeric($size['name']) ? $size['name'] : Str::slug($size['name']);
            $size['status'] = 1;
            $size['product_id'] = $product_id;
            $size['product_color_id'] = $color_id;

            $result[] = $this-> productSizeRepository->create($size);
        }
        return $result;
    }
    public function deleteColorSize($product_id){
        //xóa size
        $this->productSizeRepository->deleteByProductId($product_id);
        //xóa màu
        return  $this->productColorRepository->deleteByProductId($product_id);
    }
    public function find($id){
        return $this->productRepository->find($id);
    }
    public function apiGetInfo($id){
        return $this->productRepository->apiGetInfo($id);
    }
    public function update($id,$params){
        $result = [];
        $product_input = $this->getProductInput($params);
        //xóa sạch màu, zize cũ
        $this->deleteColorSize($id);
        //tạo màu theo sp
        if (isset($params['color'])) {
            $color = $params['color'];

            $result[] =  $this->createProductColor($color,$id);
        }
        $this->productRepository->updateById($id,$product_input);
    }
}
