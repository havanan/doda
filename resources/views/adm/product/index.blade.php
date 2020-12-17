@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Danh sách sản phẩm',
        'url' => '#',
        'child' => []
    ]
    ?>
@endsection

@section('js')
    <script>

        const urlDelete = '{{route('admin.product.delete')}}';
        const urlList = '{{route('admin.product.list')}}';
        const urlPrefix = '{{route('admin.product.index')}}';
        const config = getPdConfTable();
    </script>
    <script src="{{asset( 'admin/js/data-table-init.js')}}"></script>
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <a href="{{route('admin.product.create')}}" class="btn btn-primary">Tạo mới <i class="fa fa-plus"></i></a>
                    {{--<h4 class="card-title">Tổng <strong class="text-danger">100</strong> sản phẩm</h4>--}}
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Avatar</th>
                                <th>Tên sản phẩm</th>
                                <th>Loại sản phẩm</th>
                                <th>Thương hiệu</th>
                                <th>Tổng kho</th>
                                <th>Trạng thái</th>
                                <th>Tạo lúc</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
