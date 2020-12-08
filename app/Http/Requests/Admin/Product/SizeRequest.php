<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;

class SizeRequest extends FormRequest
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
                'name' => "required|max:255|unique:product_sizes,name,{$this->id}",
            ];
        }
        //check create
        return [
            'name' => 'required|max:255|unique:product_sizes,name',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên size không được để trống',
            'name.unique' => 'Tên size đã tồn tại',
            'name.max' => 'Tên size tối đa :max ký tự',
        ];
    }
}
