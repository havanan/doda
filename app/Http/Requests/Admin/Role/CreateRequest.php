<?php

namespace App\Http\Requests\Admin\Role;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //check update
        if (isset($this->id) && $this->id != null) {

            return [
                'name' => "required|max:255|unique:roles,name,{$this->id}",
                'note' => 'required',
                'permission_id'=> 'required'
            ];
        }
        //check create
        return [
            'name' => 'required|max:255|unique:roles,name',
            'note' => 'required',
            'permission_id'=> 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên quyền không được để trống',
            'name.max' => 'Tên quyền tối đa :max ký tự',
            'name.unique' => 'Tên quyền đã tồn tại',
            'note.required' => 'Ghi chú không được để trống',
            'permission_id.required' => 'Thao tác không được để trống',
        ];
    }
}
