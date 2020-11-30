@extends('layouts.admin')
@section('breadcrumb')
    <?php
    $breadcrumb = [
        'title' => 'Danh sách người dùng',
        'url' => 'admin.user.index',
        'child' => [
            'title' => 'Tạo mới',
            'url' => '#'
        ]
    ]
    ?>
@endsection
@section('content')

@endsection
