<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
                'name' => "required|max:255|unique:product_categories,name,{$this->id}",
            ];
        }
        //check create
        return [
            'name' => 'required|max:255|unique:product_categories,name',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên chuyên mục không được để trống',
            'name.unique' => 'Tên chuyên mục đã tồn tại',
            'name.max' => 'Tên chuyên mục tối đa :max ký tự',
        ];
    }
}
