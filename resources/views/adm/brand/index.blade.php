@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Danh sách người dùng',
        'url' => '#',
        'child' => []
    ]
    ?>
@endsection

@section('js')
    <script>

        const urlDelete = '{{route('admin.brand.delete')}}';
        const urlList = '{{route('admin.brand.list')}}';
        const urlPrefix = 'brand';
        const config = getBrConfTable();
    </script>
    <script src="{{asset( 'admin/js/data-table-init.js')}}"></script>
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <a href="{{route('admin.brand.create')}}" class="btn btn-primary">Tạo mới <i class="fa fa-plus"></i></a>
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên thương hiệu</th>
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
