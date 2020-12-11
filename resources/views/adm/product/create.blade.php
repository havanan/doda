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
    $genders = [
        0 => 'Nữ',
        1 => 'Nam',
        2 => 'Khác'
    ];
    $types = [
        0 => 'Khách lẻ',
        1 => 'Khách sỉ',
        2 => 'Khác'
    ];
    $status = [
        0 => 'Khóa',
        1 => 'Hoạt động'
    ];
    ?>
@endsection
@section('js')
    <script src="{{asset('vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
    <script>
        var route_prefix = "{{route('home')}}/laravel-filemanager";
        $('#lfm').filemanager('image', {prefix: route_prefix});
    </script>
@endsection
@section('content')
    <div class="row" id="app">
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
