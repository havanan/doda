@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Danh sách quyền',
        'url' => '#',
        'child' => []
    ]
    ?>
@endsection

@section('js')
    <script>

        const urlDelete = '{{route('admin.role.delete')}}';
        const urlList = '{{route('admin.role.list')}}';
        const urlPrefix = 'role';
        const config = getRConfTable();
    </script>
    <script src="{{asset( 'admin/js/data-table-init.js')}}"></script>
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <a href="{{route('admin.role.create')}}" class="btn btn-primary">Tạo mới <i class="fa fa-plus"></i></a>
                    {{--<h4 class="card-title">Tổng <strong class="text-danger">100</strong> quyền</h4>--}}
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Ghi chú</th>
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
