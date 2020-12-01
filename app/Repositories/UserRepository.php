<?php

namespace App\Repositories;

use App\Helpers\Common;
use App\Repositories\Base\BaseRepository;
use App\User;
use Illuminate\Database\Eloquent\Collection;

class UserRepository extends BaseRepository
{
    public function __construct(User $model)
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

    /**
     * @param $user
     * @param $data
     * @return Collection
     */
    public function updateUserInfo($user, $data)
    {
        $user->fill($data)->save();
        return $user;
    }

    public function getListWithDataTable($params) {
        $paginate = Common::toPagination($params);

        $query = $this->model->orderBy($paginate['sort'], $paginate['order']);

        if (isset($paginate['search'])) {

            $query->where('email', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('phone', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('name', 'like', "%" . $paginate['search'] . "%");
            $query->orWhere('address', 'like', "%" . $paginate['search'] . "%");
        }

        return $query->get();
    }
}
