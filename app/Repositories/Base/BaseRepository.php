<?php
namespace App\Repositories\Base;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository implements BaseRepositoryInterface
{
    /** @var Model $model */
    protected $model;

    public function create($attribute)
    {
        if (isset($attribute['_token'])) {
            unset($attribute['_token']);
        }
        return $this->model->create($attribute);
    }

    public function find($id, $relations = [])
    {
        if (!empty($relations)) {
            return $this->model->with($relations)->find($id);
        }
        return $this->model->find($id);
    }

    public function delete($id)
    {
        return $this->model->where('id', $id)->delete();
    }

    public function updateById($id, $input)
    {
        if (isset($input['_token'])) {
            unset($input['_token']);
        }
        return $this->model->where('id', $id)
            ->update($input);
    }

    public function firstOrNew($input)
    {
        return $this->model->firstOrNew($input);
    }

    public function firstOrCreate($input)
    {
        if (isset($input['_token'])) {
            unset($input['_token']);
        }
        return $this->model->firstOrCreate($input);
    }

    public function insertMulti($input)
    {
        if (isset($input['_token'])) {
            unset($input['_token']);
        }
        return $this->model->insert($input);
    }

    public function updateOrCreate($attributes, $values)
    {
        if (isset($values['_token'])) {
            unset($values['_token']);
        }
        return $this->model->updateOrCreate($attributes, $values);
    }
}
