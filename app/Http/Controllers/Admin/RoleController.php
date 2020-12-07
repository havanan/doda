<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
    public function save(Request $request){
        $params = $request->all();
        DB::beginTransaction();

        try {
            $this->roleService->createRole($params);
            DB::commit();
            return redirect()->route('admin.role.index')->with('success','Thêm quyền thành công');
        }
        catch (\Exception $e) {
            DB::rollback();
            dd($e);
            return  back()->with('error','Thêm quyền thất bại');
        }
    }
}
