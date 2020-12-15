<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $guarded = [];

    public function children() {
        return $this->hasMany(ProductCategory::class,'parent_id','id');
    }
}
