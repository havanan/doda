@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Danh sách thương hiệu',
        'url' => '#',
        'child' => []
    ];
    $status = [
        0 => 'Khóa',
        1 => 'Hoạt động'
    ];
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
    <script src="{{asset('vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
    <script>
        var route_prefix = "{{route('home')}}/laravel-filemanager";
        $('#lfm').filemanager('image', {prefix: route_prefix});
    </script>
@endsection
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form method="post" action="{{isset($info) ? route('admin.brand.update',$info->id) : route('admin.brand.save')}}">
                        @csrf
                        <div class="form-body">
                            <h3 class="box-title">Thông tin thương hiệu</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group row">
                                        <label class="control-label col-md-12">Tên thương hiệu</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Vd: Fare" name="name" id="name" value="{{isset($info['name']) ? $info['name'] : old('name')}}" required>
                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-4">
                                    <div class="form-group row">
                                        <label class="control-label col-md-12">Trạng thái:</label>
                                        <div class="col-md-12">
                                          <div class="row">
                                              @foreach($status as $key => $item)
                                                  <div class="col-md-4">
                                                      <label class="custom-control custom-radio">
                                                          <input value="{{$key}}" id="radio{{$key}}" name="status" type="radio"
                                                                 class="custom-control-input" @if(isset($info['status']) && $info['status'] == $key) checked @elseif($key == 0) checked @endif>
                                                          <span class="custom-control-label">{{$item}}</span>
                                                      </label>
                                                  </div>
                                              @endforeach
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group row">
                                        <label class="control-label col-md-12">Ảnh đại diện</label>
                                        <div class="col-md-12">
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <div id="holder" style="max-height:150px;">
                                                        @if(isset($info['avatar']) && $info['avatar'] != null)
                                                            <img id="img-holder" src="{{$info['avatar']}}" width="150px">
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="input-group">
                                                   <span class="input-group-btn">
                                                     <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary text-white">
                                                       <i class="fa fa-picture-o"></i> Chọn ảnh
                                                     </a>
                                                   </span>
                                                        <input id="thumbnail" class="form-control" type="text" name="avatar" style="display: none" value="{{isset($info['avatar']) ? $info['avatar'] : ''}}">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!--/span-->
                                <div class="col-md-12 text-right">
                                    <button type="reset" class="btn btn-danger">Xóa</button>
                                    <button type="submit" class="btn btn-primary">Lưu thông tin</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="table-responsive m-t-40">
                        <table class="data-table display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th></th>
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
