<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ProductSizeService;
use Illuminate\Http\Request;

class ProductSizeController extends Controller
{
    protected $productSizeService;
    public function __construct(ProductSizeService $productSizeService)
    {
        $this->productSizeService = $productSizeService;
    }

    public function apiGetAllSize(){
        $data = $this->productSizeService->apiGetAllSize([]);
        return $this->resSuccessData($data);
    }
}
