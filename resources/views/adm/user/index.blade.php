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
@section('css')
    <script>
        const DATE_TIME   = 'HH:mm DD/MM/YYYY';
        const DATE = 'DD/MM/YYYY';
        const urlDelete = '{{route('admin.user.delete')}}';
        const config = {
            ajax: '{{route('admin.user.list')}}',
            columns: [
                {data:null},
                {data:'name'},
                {data:'email'},
                {data:'phone'},
                {data:'birthday',
                    type:'date',
                    render: function(data){
                        if (data === null) return "";
                        return moment(data).format(DATE);
                    },},
                {data:'address_1'},
                {data:'address_2'},
                {data:'created_at',
                    type:'date',
                    render: function(data){
                        if (data === null) return "";
                        return moment(data).format(DATE_TIME);
                    },},
                {data: null,
                    render: function (data) {
                        if (!data) {
                            return ''
                        }
                        return '<a href="user/view/'+data.id+'" class="btn btn-success m-r-5"><i class="fa fa-info-circle"></i></a >'+
                                '<a href="user/edit/'+data.id+'" class="btn btn-info m-r-5"><i class="fa fa-pencil"></i></a>' +
                                '<button class="btn btn-danger alert-delete" onclick="alertDelete('+data.id+')"><i class="fa fa-trash"></i></button>'
                    }}
            ],
            columnDefs: [],
        }
    </script>
    {{--<script src="{{asset('admin/js/data-table.js')}}"></script>--}}
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    {{--<h4 class="card-title">Tổng <strong class="text-danger">100</strong> người dùng</h4>--}}
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Ngày sinh</th>
                                <th>Địa chỉ 1</th>
                                <th>Địa chỉ 2</th>
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
