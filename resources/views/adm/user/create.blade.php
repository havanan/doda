@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Tạo mới người dùng',
        'url' => 'admin.user.index',
        'child' => [
            'title' => 'Tạo mới',
            'url' => '#'
        ]
    ];
    $genders = [
        0 => 'Nữ',
        1 => 'Nam',
        2 => 'Khác'
    ]
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
                    <form action="{{route('admin.user.save')}}" method="post" class="form-horizontal">
                        @csrf
                        <div class="form-body">
                            <h3 class="box-title">Thông tin khách hàng</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Tên đầy đủ</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Vd: Hoàng Văn Xyz" required>
                                            {{--<small class="form-control-feedback"> This is inline help </small> --}}
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Email</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control"
                                                   placeholder="Vd: abcd@xyz.com" required>
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
                                                    <option value="{{$key}}">{{$item}}</option>
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
                                            <input type="text" name="phone" class="form-control" required placeholder="Vd: 039283333">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Phân loại</label>
                                        <div class="col-md-9">
                                            <select class="form-control custom-select"
                                                    data-placeholder="Choose a Category" tabindex="1">
                                                <option value="Category 1">Category 1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Sinh nhật</label>
                                        <div class="col-md-9">
                                            <input type="date" class="form-control" placeholder="dd/mm/yyyy" name="birthday">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Trạng thái</label>
                                        <div class="col-md-9">
                                            <div class="m-b-10">
                                                <label class="custom-control custom-radio">
                                                    <input value="1" id="radio3" name="status" type="radio"
                                                           class="custom-control-input" checked>
                                                    <span class="custom-control-label">Hoạt động</span>
                                                </label>
                                                <label class="custom-control custom-radio">
                                                    <input value="0" id="radio4" name="status" type="radio"
                                                           class="custom-control-input">
                                                    <span class="custom-control-label">Khóa</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Ảnh đại diện</label>
                                        <div class="col-md-9">
                                            <div class="input-group">
                                                   <span class="input-group-btn">
                                                     <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary text-white">
                                                       <i class="fa fa-picture-o"></i> Chọn ảnh
                                                     </a>
                                                   </span>
                                                <input id="thumbnail" class="form-control" type="text" name="avatar" style="display: none">
                                            </div>
                                            <div id="holder" style="margin-top:15px;max-height:100px;">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!--/span-->
                            </div>
                            <h3 class="box-title">Địa chỉ</h3>
                            <hr class="m-t-0 m-b-40">
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">City</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">State</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Post Code</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Country</label>
                                        <div class="col-md-9">
                                            <select class="form-control custom-select">
                                                <option>Country 1</option>
                                                <option>Country 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Địa chỉ 1</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control" name="address_1"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Địa chỉ 2</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control" name="address_2"></textarea>
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
