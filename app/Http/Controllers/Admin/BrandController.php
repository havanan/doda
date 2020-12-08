<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\BrandService;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    protected $brandService;
    public function __construct(BrandService $brandService)
    {
        $this->brandService = $brandService;
    }
    public function index(){
        return view('adm.brand.index');
    }
    public function getList(Request $request) {
        $params = $request->all();
        return $this->brandService->getListWithDataTable($params);
    }
}
