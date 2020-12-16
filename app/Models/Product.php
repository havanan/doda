<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];

    public function cat(){
        return $this->belongsTo(ProductCategory::class,'product_type_id')->select('id','name','slug','status');
    }
    public function brand(){
        return $this->belongsTo(Brand::class,'brand_id')->select('id','name','slug','status','avatar');
    }

}
