<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        $data = $this->userervice->getListWithDataTable($params);
        return response()->json($data);
    }
}
