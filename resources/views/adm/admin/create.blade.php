@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Nhân viên',
        'url' => 'admin.staff.index',
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
                    <form action="{{isset($info) ? route('admin.staff.update',$info->id) : route('admin.staff.save')}}" method="post" class="form-horizontal">
                        @csrf
                        <div class="form-body">
                            <h3 class="box-title">Thông tin nhân viên</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Tên đầy đủ</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Vd: Hoàng Văn Xyz" name="name" value="{{isset($info['name']) ? $info['name'] : old('name')}}" required>
                                            {{--<small class="form-control-feedback"> This is inline help </small> --}}
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Email</label>
                                        <div class="col-md-9">
                                            <input type="email" class="form-control"
                                                   placeholder="Vd: abcd@xyz.com" name="email" value="{{isset($info['email']) ? $info['email'] : old('email')}}" required>
                                            {{--<small class="form-control-feedback"> This field has error. </small> --}}
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Giới tính</label>
                                        <div class="col-md-9">
                                            <select class="form-control custom-select" name="gender" required>
                                               @foreach($genders as $key => $item)
                                                    <option value="{{$key}}" @if(isset($info['gender']) && $info['gender'] == $key) selected @elseif($key == 0) selected @endif>{{$item}}</option>
                                               @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Điện thoại</label>
                                        <div class="col-md-9">
                                            <input type="number" max="9999999999999" name="phone" class="form-control" required placeholder="Vd: 039283333" value="{{isset($info['phone']) ? $info['phone'] : ''}}">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Quyền</label>
                                        <div class="col-md-9">
                                            <select class="form-control custom-select"
                                                    data-placeholder="Vui lòng chọn quyền" name="role_id" tabindex="1">
                                                @foreach($roles as $key => $item)
                                                    <option value="{{$item['id']}}" @if(isset($info['role_id']) && $info['role_id'] == $item['id']) selected @elseif($item['id'] == 0) selected @endif>{{$item['name']}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Sinh nhật</label>
                                        <div class="col-md-9">
                                            <input type="date" class="form-control" placeholder="dd/mm/yyyy" name="birthday" value="{{isset($info['birthday']) ? $info['birthday'] : date('Y-m-d')}}">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Trạng thái</label>
                                        <div class="col-md-9">
                                            <div class="m-b-10">
                                                @foreach($status as $key => $item)
                                                <label class="custom-control custom-radio">
                                                    <input value="{{$key}}" id="radio{{$key}}" name="status" type="radio"
                                                           class="custom-control-input" @if(isset($info['status']) && $info['status'] == $key) checked @elseif($key == 0) checked @endif>
                                                    <span class="custom-control-label">{{$item}}</span>
                                                </label>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Ảnh đại diện</label>
                                        <div class="col-md-9">
                                           <div class="row">
                                               <div class="col-md-6">
                                                   <div class="input-group">
                                                   <span class="input-group-btn">
                                                     <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary text-white">
                                                       <i class="fa fa-picture-o"></i> Chọn ảnh
                                                     </a>
                                                   </span>
                                                       <input id="thumbnail" class="form-control" type="text" name="avatar" style="display: none" value="{{isset($info['avatar']) ? $info['avatar'] : ''}}">
                                                   </div>
                                               </div>
                                               <div class="col-md-6">
                                                   <div id="holder" style="max-height:200px;">
                                                       @if(isset($info['avatar']) && $info['avatar'] != null)
                                                           <img src="{{$info['avatar']}}" width="200px">
                                                       @endif
                                                   </div>
                                               </div>
                                           </div>

                                        </div>
                                    </div>
                                </div>
                            <!--/span-->
                            </div>
                            <h3 class="box-title">Địa chỉ</h3>
                            <hr class="m-t-0 m-b-40">
                            <!--/row-->
{{--                            <div class="row">--}}
{{--                                <div class="col-md-6">--}}
{{--                                    <div class="form-group row">--}}
{{--                                        <label class="control-label text-right col-md-3">Tỉnh/Thành phố</label>--}}
{{--                                        <div class="col-md-9">--}}
{{--                                            <select class="form-control custom-select">--}}
{{--                                                <option>Country 1</option>--}}
{{--                                            </select>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <!--/span-->--}}
{{--                                <div class="col-md-6">--}}
{{--                                    <div class="form-group row">--}}
{{--                                        <label class="control-label text-right col-md-3">State</label>--}}
{{--                                        <div class="col-md-9">--}}
{{--                                            <input type="text" class="form-control">--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <!--/span-->--}}
{{--                            </div>--}}
{{--                            <!--/row-->--}}
{{--                            <div class="row">--}}
{{--                                <div class="col-md-6">--}}
{{--                                    <div class="form-group row">--}}
{{--                                        <label class="control-label text-right col-md-3">Post Code</label>--}}
{{--                                        <div class="col-md-9">--}}
{{--                                            <input type="text" class="form-control">--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <!--/span-->--}}
{{--                                <div class="col-md-6">--}}
{{--                                    <div class="form-group row">--}}
{{--                                        <label class="control-label text-right col-md-3">Country</label>--}}
{{--                                        <div class="col-md-9">--}}
{{--                                            <select class="form-control custom-select">--}}
{{--                                                <option>Country 1</option>--}}
{{--                                                <option>Country 2</option>--}}
{{--                                            </select>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <!--/span-->--}}
{{--                            </div>--}}
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Địa chỉ 1</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control" name="address_1">{{isset($info['address_1']) ? $info['address_1'] : old('address_1')}}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Địa chỉ 2</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control" name="address_2">{{isset($info['address_2']) ? $info['address_2'] : old('address_2')}}</textarea>
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
