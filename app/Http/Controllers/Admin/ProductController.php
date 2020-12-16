<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\CreateRequest;
use App\Http\Requests\Admin\Product\ProductRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    protected $productService;
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }
    public function index(){
        return view('adm.product.index');
    }
    public function create(){
        return view('adm.product.create');
    }
    public function getList(Request $request) {
        $params = $request->all();
        return  $this->productService->getListWithDataTable($params);
    }
    public function delete(Request $request) {
        $id = $request->get('id');
        return $this->productService->deleteById($id);
    }
    public function save(ProductRequest $request) {
        $params = $request->all();
        DB::beginTransaction();
        try {
            $this->productService->create($params);
            DB::commit();
            return redirect()->route('admin.product.index')->with('success','Thêm sản phẩm thành công');
        }
        catch (\Exception $e) {
            DB::rollback();
            return  back()->with('error','Thêm sản phẩm thất bại');
        }

    }
    public function edit($id){
        $info = $this->productService->find($id);
        return view('adm.product.edit',compact('id','info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        DB::beginTransaction();
        try {
            $this->productService->updateUserInfo($id,$params);
            DB::commit();
            return redirect()->route('admin.product.index')->with('success','Sửa sản phẩm thành công');
        }
        catch (\Exception $e) {
            DB::rollback();
            dd($e);
            return  back()->with('error','Sửa sản phẩm thất bại');
        }
    }
    public function view($id) {
        $info = $this->productService->find($id);
        return view('adm.product.view',compact('info'));
    }
    public function getById($id){
        $info = $this->productService->apiGetInfo($id);
        return $this->resSuccessData($info);
    }
}
