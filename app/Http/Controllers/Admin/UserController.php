<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return view('adm.user.index');
    }
    public function create(){
        return view('adm.user.create');
    }
}
