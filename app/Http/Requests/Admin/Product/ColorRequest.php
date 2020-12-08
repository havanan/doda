<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;

class ColorRequest extends FormRequest
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
                'name' => "required|max:255|unique:product_colors,name,{$this->id}",
                'value' => 'required|max:255'
            ];
        }
        //check create
        return [
            'name' => 'required|max:255|unique:product_colors,name',
            'value' => 'required|max:255'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên màu sắc không được để trống',
            'name.unique' => 'Tên màu sắc đã tồn tại',
            'name.max' => 'Tên màu sắc tối đa :max ký tự',
            'value.required' => 'Giá trị màu không được để trống',
            'value.max' => 'Giá trị màu tối đa :max ký tự',

        ];
    }
}
