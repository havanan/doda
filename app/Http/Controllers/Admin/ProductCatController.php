<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\CategoryRequest;
use App\Services\ProductCategoryService;
use Illuminate\Http\Request;

class ProductCatController extends Controller
{
    protected $productCategoryService;

    public function __construct(ProductCategoryService $productCategoryService)
    {
        $this->productCategoryService = $productCategoryService;
    }

    public function index()
    {

        return view('adm.product.category.index');
    }


    public function create()
    {
        $parents = $this->productCategoryService->getParent();
        return view('adm.product.category.create', compact('parents'));
    }

    public function save(CategoryRequest $request)
    {
        $params = $request->all();
        try {
            $this->productCategoryService->create($params);
            return redirect()->route('admin.product.cat.index')->with('success', 'Thêm loại sản phẩm thành công');
        } catch (\Exception $e) {
            return back()->with('error', 'Thêm loại sản phẩm thất bại');
        }
    }

    public function view($id)
    {
        $info = $this->productCategoryService->findUserById($id);
        $parents = $this->productCategoryService->getParent();
        return view('adm.product.category.view',compact('info','parents'));
    }

    public function edit($id)
    {
        $info = $this->productCategoryService->findUserById($id);
        $parents = $this->productCategoryService->getParent();
        return view('adm.product.category.create',compact('info','parents'));
    }

    public function update(CategoryRequest $request, $id)
    {
        $params = $request->all();
        try {
            $this->productCategoryService->updateById($id,$params);
            return redirect()->route('admin.product.cat.index')->with('success', 'Sửa loại sản phẩm thành công');
        } catch (\Exception $e) {
            return back()->with('error', 'Sửa loại sản phẩm thất bại');
        }
    }

    public function delete(Request $request)
    {
        $id = $request->get('id');
        return $this->productCategoryService->deleteById($id);
    }
    public function getList(Request $request) {
        $params = $request->all();
        return  $this->productCategoryService->getListWithDataTable($params);
    }
}