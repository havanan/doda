<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\CreateRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;

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
    public function save(CreateRequest $request) {
        $params = $request->all();

        try {
            $this->productService->createUser($params);
            return redirect()->route('admin.product.index')->with('success','Thêm sản phẩm thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Thêm sản phẩm thất bại');
        }

    }
    public function edit($id){
        $info = $this->productService->findUserById($id);
        return view('adm.product.create',compact('info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        try {
            $this->productService->updateUserInfo($id,$params);
            return redirect()->route('admin.product.index')->with('success','Sửa sản phẩm thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Sửa sản phẩm thất bại');
        }
    }
    public function view($id) {
        $info = $this->productService->findUserById($id);
        return view('adm.product.view',compact('info'));
    }
}
