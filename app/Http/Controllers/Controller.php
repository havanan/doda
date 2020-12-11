<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function resSuccessData($data){
        return response()->json(['status' => 200, 'data' => $data], 200);
    }
    public function resErrorData($data){
        return response()->json(['status' => 500, 'data' => $data], 500);
    }
}
