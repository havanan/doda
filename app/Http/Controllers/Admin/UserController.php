<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\CreateRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userervice;
    public function __construct(UserService $userervice)
    {
        $this->userervice = $userervice;
    }

    public function index(){
        return view('adm.user.index');
    }
    public function create(){
        return view('adm.user.create');
    }
    public function getList(Request $request) {
        $params = $request->all();
        return  $this->userervice->getListWithDataTable($params);
    }
    public function delete(Request $request) {
        $id = $request->get('id');
        return $this->userervice->deleteById($id);
    }
    public function save(CreateRequest $request) {
        $params = $request->all();

        try {
            $this->userervice->createUser($params);
            return redirect()->route('admin.user.index')->with('success','Thêm người dùng thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Thêm người dùng thất bại');
        }

    }
    public function edit($id){
        $info = $this->userervice->findUserById($id);
        return view('adm.user.create',compact('info'));
    }
    public function update(CreateRequest $request,$id) {
        $params = $request->all();
        try {
            $this->userervice->updateUserInfo($id,$params);
            return redirect()->route('admin.user.index')->with('success','Sửa người dùng thành công');
        }
        catch (\Exception $e) {
            return  back()->with('error','Sửa người dùng thất bại');
        }
    }
    public function view($id) {
        $info = $this->userervice->findUserById($id);
        return view('adm.user.view',compact('info'));
    }
}
