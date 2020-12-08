@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Loại sản phẩm',
        'url' => 'admin.product.cat.index',
        'child' => [
            'title' => isset($info) ? 'Sửa' : 'Tạo mới',
            'url' => '#'
        ]
    ];
    $status = [
        0 => 'Khóa',
        1 => 'Hoạt động'
    ];
    ?>
@endsection
@section('js')

@endsection
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-outline-info">
                <div class="card-header">
                    <h4 class="m-b-0 text-white"><i class="fa fa-user-plus"></i></h4>
                </div>
                <div class="card-body">
                    <form action="{{isset($info) ? route('admin.product.cat.update',$info->id) : route('admin.product.cat.save')}}" method="post" class="form-horizontal">
                        @csrf
                        <div class="form-body">
                            <h3 class="box-title">Thông tin loại sản phẩm</h3>
                            <hr class="m-t-0 m-b-40">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Tên loại sản phẩm</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Vd: Quần, Áo, Giày...." name="name" value="{{isset($info['name']) ? $info['name'] : old('name')}}" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="control-label text-right col-md-3">Chuyên mục</label>
                                        <div class="col-md-9">
                                            <select class="form-control custom-select" name="parent_id">
                                                <option value="">Chuyên mục cha</option>
                                               @foreach($parents as $key => $item)
                                                    <option value="{{$item->id}}" @if(isset($info['parent_id']) && $info['parent_id'] == $item->id) selected @elseif($item->id == 0) selected @endif>{{$item->name}}</option>
                                               @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--/row-->
                            <div class="row">
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
