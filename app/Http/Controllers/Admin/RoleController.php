<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Role\CreateRequest;
use App\Services\RoleService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    protected $roleService;
   public function __construct(RoleService $roleService)
   {
        $this->roleService = $roleService;

   }

   public function index(){
       return view('adm.role.index');
   }
    public function getList(Request $request) {
        $params = $request->all();
        return  $this->roleService->getListWithDataTable($params);
    }
    public function delete(Request $request) {
        $id = $request->get('id');
        return $this->roleService->deleteById($id);
    }
    public function create() {
        $permissions = $this->roleService->getAllPermission();
        return view('adm.role.create',compact('permissions'));

    }
    public function save(CreateRequest $request){
        $params = $request->all();
        DB::beginTransaction();

        try {
            $this->roleService->createRole($params);
            DB::commit();
            return redirect()->route('admin.role.index')->with('success','Thêm quyền thành công');
        }
        catch (\Exception $e) {
            DB::rollback();
            return  back()->with('error','Thêm quyền thất bại');
        }
    }
    public function edit($id) {
        $info = $this->roleService->findById($id);
        $permissions = $this->roleService->getAllPermission();
        $info['permission_ids'] = $this->roleService->getPermissionIdsByRole($id);
        return view('adm.role.create',compact('permissions','info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        DB::beginTransaction();
        try {
            $this->roleService->updateInfo($id,$params);
            DB::commit();
            return redirect()->route('admin.role.index')->with('success','Thêm quyền thành công');
        }
        catch (\Exception $e) {
            DB::rollback();
            return  back()->with('error','Thêm quyền thất bại');
        }
    }
}
