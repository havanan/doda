@extends('layouts.auth')
@section('title') Login @endsection
@section('content')
    <div class="container-login100 page-background">
        <div class="wrap-login100">
            @isset($url)
                <form class="login100-form validate-form" method="post" action="{{ url("login/$url") }}"
                      aria-label="{{ __('Đăng nhập') }}">
                    @else
                        <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                            @endisset
                            @csrf
                            <span class="login100-form-logo">
						<img alt="" src="{{asset('img/hospital.png')}}">
					</span>
                            <span class="login100-form-title p-b-34 p-t-27">
						Đăng nhập
					</span>
                            <div class="wrap-input100 validate-input" data-validate="Vui lòng nhập Email">
                                <input class="input100" type="email" name="email" placeholder="Email" required>
                                <span class="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate="Vui lòng nhập Mật khẩu">
                                <input class="input100" type="password" name="password" placeholder="Mật khẩu" required>
                                <span class="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Đăng nhập
                                </button>
                            </div>
                            <div class="text-center p-t-30">
                                <a class="txt1" href="forgot_password.html">
                                    Quên mật khẩu ?
                                </a>
                            </div>
                        </form>
        </div>
    </div>
@endsection
