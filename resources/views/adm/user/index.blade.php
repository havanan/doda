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
        const config = {
            ajax: '{{route('admin.user.list')}}',
            columns: [
                {data:'name'},
                {data:'email'},
                {data:'phone'},
                {data:'address1'},
                {data:'address2'},
            ]
        }
    </script>
    <script src="{{asset('admin/js/data-table.js')}}"></script>
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Tổng <strong class="text-danger">100</strong> người dùng</h4>
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Địa chỉ 1</th>
                                <th>Địa chỉ 2</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Địa chỉ 1</th>
                                <th>Địa chỉ 2</th>
                            </tr>
                            </tfoot>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
