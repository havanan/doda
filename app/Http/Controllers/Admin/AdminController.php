<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Admin\CreateRequest;
use App\Services\AdminService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $adminService;
    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    public function index(){
        return view('adm.admin.index');
    }
    public function create(){
        return view('adm.admin.create');
    }
    public function getList(Request $request) {
        $params = $request->all();
        return  $this->adminService->getListWithDataTable($params);
    }
    public function delete(Request $request) {
        $id = $request->get('id');
        return $this->adminService->deleteById($id);
    }
    public function save(CreateRequest $request) {
        $params = $request->all();

        try {
            $this->adminService->createUser($params);
            return redirect()->route('admin.admin.index')->with('success','Thêm nhân viên thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Thêm nhân viên thất bại');
        }

    }
    public function edit($id){
        $info = $this->adminService->findUserById($id);
        return view('adm.admin.create',compact('info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        try {
            $this->adminService->updateUserInfo($id,$params);
            return redirect()->route('admin.admin.index')->with('success','Sửa nhân viên thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Sửa nhân viên thất bại');
        }
    }
    public function view($id) {
        $info = $this->adminService->findUserById($id);
        return view('adm.admin.view',compact('info'));
    }
}
