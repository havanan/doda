<?php

namespace App\Http\Requests\Admin\User;

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
        return [
            'name' => 'required|max:255',
            'email' => 'email|unique:admins,email',
            'phone' => 'required',

//            'password' => 'required|min:6|max:255',
//            'password_confirm' => 'required_with:password|same:password',
            'birthday' => 'nullable|date',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên người dùng không được để trống',
            'email.required' => 'Email không được để trống',
            'phone.required' => 'Số điện thoại không được để trống',
            'password' => 'Mật khẩu không được để trống',
            'birthday.date' => 'Ngày sinh phải là dạng dd/mm/yyyy'
        ];
    }
}
