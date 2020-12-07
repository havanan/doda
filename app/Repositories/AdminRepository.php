<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Models\Admin;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

class AdminRepository extends BaseRepository
{
    public function __construct(Admin $model)
    {
        $this->model = $model;
    }
    /**
     * @return Collection
     */
    public function getBlockUsers()
    {
        return $this->model->where('is_blocked', 1)->get();
    }
    /**
     * @param $email
     * @return Collection
     */
    public function getByEmail($email)
    {
        return $this->model
            ->where('email', $email)
            ->first();
    }
    public function getListWithDataTable($params) {

        $paginate = Common::toPagination($params);

        $query = $this->model
            ->select('admins.*','roles.name as role_name')
            ->orderBy($paginate['sort'], $paginate['order'])
            ->leftJoin('roles','roles.id','admins.role_id');

        if (isset($paginate['search'])) {

            $query->where('admins.email', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('admins.phone', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('admins.name', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('admins.address_1', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('admins.address_2', 'like', "%" . $paginate['search'] . "%");

        }
        $query = $query->skip($paginate['start'])->take($paginate['limit'])->get();
        $total = $this->model->count();
        return Common::toJson($query,$total);
    }

}
