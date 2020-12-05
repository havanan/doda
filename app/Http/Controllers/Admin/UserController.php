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
        $create = $this->userervice->createUser($params);
        if ($create) {
            return redirect()->route('admin.user.index')->with('success','Thêm người dùng thành công');
        }
        return  back()->with('error','Thêm người dùng thất bại');
    }
}
