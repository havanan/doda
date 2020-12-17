<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    protected $guarded = [];

    public function product_sizes(){
        return $this->hasMany(ProductSize::class,'product_color_id','id')
            ->select('id','name','slug','available','product_color_id','product_id','color_id','status');
    }
}
