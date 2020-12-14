@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Sản phẩm',
        'url' => 'admin.product.index',
        'child' => [
            'title' => isset($info) ? 'Sửa' : 'Tạo mới',
            'url' => '#'
        ]
    ];
    ?>
@endsection
@section('js')
{{--    <script src="{{asset('vendor/laravel-filemanager/js/filemanager.js')}}"></script>--}}
{{--    <script src="{{asset('vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>--}}
@endsection
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-outline-info">
                <div class="card-header">
                    <h4 class="m-b-0 text-white"><i class="fa fa-user-plus"></i></h4>
                </div>
                <div class="card-body" id="cardBody">
                    <form>
                        <product-component
                                :url-get-brand="'{{route('admin.brand.apiGetAll')}}'"
                                :url-get-size="'{{route('admin.product.size.apiGetAllSize')}}'"
                        ></product-component>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
