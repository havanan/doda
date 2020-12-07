@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Quyền',
        'url' => 'admin.user.index',
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
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-outline-info">
                <div class="card-header">
                    <h4 class="m-b-0 text-white"><i class="fa fa-user-plus"></i></h4>
                </div>
                <div class="card-body">
                    <form action="{{isset($info) ? route('admin.role.update',$info->id) : route('admin.role.save')}}" method="post" class="form-horizontal">
                        @csrf
                        <div class="form-body">
                            <h3 class="box-title">Thông tin quyền</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Tên quyền</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Vd: Admin, nhân viên...." name="name" value="{{isset($info['name']) ? $info['name'] : old('name')}}" required>
                                            {{--<small class="form-control-feedback"> This is inline help </small> --}}
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Ghi chú</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control" name="note" required>{{isset($info['note']) ? $info['note'] : old('note')}}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="box-title">Tác vụ</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Chọn các chức năng:</label>
                                        <div class="col-md-9">
                                            <div class="m-b-10">
                                                @foreach($permissions as $key => $item)
                                                    <label class="custom-control custom-radio">
                                                        <input value="{{$item->id}}" id="radio{{$item->id}}" name="permission_id[]" type="checkbox"
                                                               class="custom-control-input" @if(isset($info['permission_id']) && in_array($item->id,$info['permission_id'])) checked @elseif($item->id == 0) checked @endif>
                                                        <span class="custom-control-label">{{$item['name']}}</span>
                                                    </label>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-actions">
                            <div class="row">
                                <div class="col-md-6"></div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-offset-3 col-md-9">
                                            <button type="reset" class="btn btn-primary">Làm mới</button>
                                            <button type="submit" class="btn btn-danger">Lưu thông tin</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
