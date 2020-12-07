<?php

namespace App\Http\Requests\Admin\Admin;

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
                'name' => 'required|max:255',
                'email' => "email|unique:users,email,{$this->id}",
                'phone' => "required|between:1,13|unique:users,phone,{$this->id}",
                'birthday' => 'nullable|date',
            ];
        }
        //check create
        return [
            'name' => 'required|max:255',
            'email' => 'email|unique:users,email',
            'phone' => 'required|between:1,13|unique:users,phone',
            'birthday' => 'nullable|date',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên người dùng không được để trống',
            'email.required' => 'Email không được để trống',
            'email.unique' => 'Email đã tồn tại',
            'phone.required' => 'Số điện thoại không được để trống',
            'phone.unique' => 'Số điện thoại đã tồn tại',
            'phone.between' => 'Số điện thoại không quá 13 số',
            'password' => 'Mật khẩu không được để trống',
            'birthday.date' => 'Ngày sinh phải là dạng dd/mm/yyyy'
        ];
    }
}
