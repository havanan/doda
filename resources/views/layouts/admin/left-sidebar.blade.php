<aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
        <!-- User profile -->
        <div class="user-profile">
            <!-- User profile image -->
            <div class="profile-img"><img src="{{asset('admin/images/users/profile.png')}}" alt="user"/>
                <!-- this is blinking heartbit-->
                <div class="notify setpos"><span class="heartbit"></span> <span class="point"></span></div>
            </div>
            <!-- User profile text-->
            <div class="profile-text">
                <h5>{{auth()->user()->name}}</h5>
                <a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="true"><i class="mdi mdi-settings"></i></a>
                <a href="app-email.html" class="" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
                <a href="{{ route('admin.logout') }}" data-toggle="tooltip" title="Đăng xuất" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i
                            class="mdi mdi-power"></i></a>
                <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
                <div class="dropdown-menu animated flipInY">
                    <!-- text-->
                    <a href="#" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                    <!-- text-->
                    <a href="#" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                    <!-- text-->
                    <a href="#" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                    <!-- text-->
                    <div class="dropdown-divider"></div>
                    <!-- text-->
                    <a href="#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                    <!-- text-->
                    <div class="dropdown-divider"></div>
                    <!-- text-->
                    <a href="login.html" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                    <!-- text-->
                </div>
            </div>
        </div>
        <!-- End User profile text-->
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
                <li class="nav-devider"></li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-gauge"></i><span class="hide-menu">Bảng điều khiển</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.index')}}">Thông tin chung</a></li>
                    </ul>
                </li>
                <li class="nav-small-cap">Tài khoản</li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-account"></i><span class="hide-menu">Người dùng</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.user.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.user.index')}}">Danh sách</a></li>
                    </ul>
                </li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-nature-people"></i><span class="hide-menu">Quyền hạn</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.role.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.role.index')}}">Danh sách</a></li>
                    </ul>
                </li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-account-multiple"></i><span class="hide-menu">Nhân viên</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.staff.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.staff.index')}}">Danh sách</a></li>
                    </ul>
                </li>
                <li class="nav-small-cap">Hàng hóa</li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-treasure-chest"></i><span class="hide-menu">Sản phẩm</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.product.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.product.index')}}">Danh sách</a></li>
                        <li><a href="{{route('admin.product.size.index')}}">Size</a></li>
                        <li><a href="{{route('admin.product.color.index')}}">Màu sắc</a></li>

                    </ul>
                </li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-vector-arrange-above"></i><span class="hide-menu">Loại sản phẩm</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.product.cat.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.product.cat.index')}}">Danh sách</a></li>
                    </ul>
                </li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-wunderlist"></i><span class="hide-menu">Thương hiệu</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.brand.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.brand.index')}}">Danh sách</a></li>
                    </ul>
                </li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-folder-multiple-image"></i><span class="hide-menu">Media</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.media.index')}}">Tổng hợp</a></li>
                        <li><a href="{{route('admin.media.index',['type' => 'image'])}}">Ảnh</a></li>
                        <li><a href="{{route('admin.media.index',['type' => 'video'])}}">Video</a></li>
                    </ul>
                </li>
                <li class="nav-small-cap">Kho hàng</li>
                <li><a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                class="mdi mdi-note-multiple"></i><span class="hide-menu">Đơn hàng</span></a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{route('admin.bill.create')}}">Tạo mới</a></li>
                        <li><a href="{{route('admin.bill.index')}}">Danh sách chung</a></li>
                        <li><a href="{{route('admin.bill.status.index')}}">Ql Trạng thái</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>