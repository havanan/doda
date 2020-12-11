<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Brand\CreateRequest;
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
    public function save(CreateRequest $request) {
        $params = $request->all();
        try {
            $this->brandService->create($params);
            return redirect()->back()->with('success','Thêm thương hiệu thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Thêm thương hiệu thất bại');
        }
    }
    public function edit($id) {
        $info = $this->brandService->findById($id);
        return view('adm.brand.index',compact('info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        try {
            $this->brandService->update($id,$params);
            return redirect()->route('admin.brand.index')->with('success','Cập nhật thương hiệu thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Cập nhật thương hiệu thất bại');
        }
    }
    public function delete(Request $request) {
        $id = $request->get('id');
        return $this->brandService->deleteById($id);
    }
    public function apiGetAll(){
        $data = $this->brandService->apiGetAll([]);
        return $this->resSuccessData($data);
    }
}
