<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
                'price' => 'required|numeric|gt:price_discount',
                'price_discount' => 'numeric',
                'avatar' => 'required',
            ];
        }
        //check create
        return [
            'name' => 'required|max:255',
            'price' => 'required|numeric|gt:price_discount',
            'price_discount' => 'numeric',
            'avatar' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên sản phẩm không được để trống',
            'name.max' => 'Tên sản phẩm không quá :max ký tự',
            'price.required' => 'Giá bán không được để trống',
            'price.numeric' => 'Giá bán là dạng số',
            'price.gt' => 'Giá bán lớn hơn giá khuyến mại',
            'price_discount.numeric' => 'Giá khuyến mại là dạng số',
            'avatar.required' => 'Ảnh sản phẩm không được để trống',

        ];
    }
}
