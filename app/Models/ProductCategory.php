<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $guarded = [];

    public function children() {
        return $this->hasMany(ProductCategory::class,'parent_id','id');
    }
    public function parent() {
        return $this->hasOne(ProductCategory::class,'id','parent_id');
    }
}
