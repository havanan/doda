@yield('breadcrumb')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h3 class="text-themecolor">{{isset($breadcrumb['title']) ? $breadcrumb['title'] : ''}}</h3>
    </div>
    <div class="col-md-7 align-self-center">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Home</a></li>
            @if(isset($breadcrumb['child']) && !empty($breadcrumb['child']))
                <li class="breadcrumb-item"><a href="{{route($breadcrumb['url'])}}">{{$breadcrumb['title']}}</a></li>
                <li class="breadcrumb-item active">{{$breadcrumb['child']['title']}}</li>
                @else
                <li class="breadcrumb-item active">{{$breadcrumb['title']}}</li>
            @endif
        </ol>
    </div>
</div>