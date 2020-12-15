<?php

namespace App\Repositories\Product;

use App\Helpers\Common;
use App\Models\ProductCategory;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class CategoryRepository extends BaseRepository
{
    public function __construct(ProductCategory $model)
    {
        $this->model = $model;
    }

    public function getListWithDataTable($params) {

        $paginate = Common::toPagination($params);

        $query = $this->model
            ->leftJoin('product_categories as p','p.id','product_categories.parent_id')
            ->select('product_categories.*','p.name as parent_name')
            ->orderBy($paginate['sort'], $paginate['order'])->orderBy('parent_id');

        if (isset($paginate['search'])) {
            $query->orWhere('name', 'like', "%" . $paginate['search'] . "%");
        }
        $query = $query->skip($paginate['start'])->take($paginate['limit'])->get();
        $total = $this->model->count();
        return Common::toJson($query,$total);
    }
    public function getAllParent(){
        return $this->model->where('status',1)->whereNull('parent_id')->get();
    }
    public function getAll($params){
        $status = 1;
        return $this->model->with(['children'])->select('name','id','slug','status','parent_id')->where('status',$status)->whereNull('parent_id')->orderBy('parent_id')->get();
    }

}
