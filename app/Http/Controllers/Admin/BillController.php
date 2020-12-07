<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\BillService;
use Illuminate\Http\Request;

class BillController extends Controller
{
    protected $billService;
    public function __construct(BillService $billService)
    {
        $this->billService = $billService;
    }
}
