<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form-body">
                <h3 class="box-title">Thông tin sản phẩm</h3>
            </div>
            <hr>
        </div>
        <div class="col-md-7">
            <div class="form-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row"><label class="control-label  col-md-12">Tên sản phẩm</label>
                            <div class="col-md-12"><input type="text" name="name" v-model="formData.name"
                                                          required="required" class="form-control"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row"><label class="control-label  col-md-12">Đường dẫn</label>
                            <div class="col-md-12"><input type="text" placeholder="Tạo tự động nếu để trống" name="slug"
                                                          v-model="formData.slug"
                                                          class="form-control"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Giá sản phẩm</label>
                            <div class="col-md-12"><input type="number" name="price" v-model="formData.price"
                                                          required="required" class="form-control"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row">
                            <label class="control-label  col-md-12">Giá giảm</label>
                            <div class="col-md-12"><input type="number" name="price_discount"
                                                          v-model="formData.price_discount"
                                                          class="form-control"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Giá giảm</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn trạng thái" tabindex="1"
                                        v-model="formData.is_discount" class="form-control custom-select">
                                    <option v-for="discount in discounts" :key="discount.id" :value="discount.id">
                                        {{discount.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row"><label class="control-label  col-md-12">Trạng thái</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn trạng thái" tabindex="1"
                                        v-model="formData.status" class="form-control custom-select">
                                    <option v-for="item in status" :key="item.id" :value="item.id">{{item.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group row"><label class="control-label  col-md-12">Nhãn hiệu</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn nhãn hiệu" tabindex="1"
                                        v-model="formData.brand_id" class="form-control custom-select">
                                    <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{brand.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 class="box-title">Thuộc tính sản phẩm</h3>
                <hr class="m-t-0 m-b-40">
                <div class="row">
                    <div v-for="(color,index) in colors" class="col-md-12">
                        <div class="form-group row">
                            <label class="control-label  col-md-12">Màu sắc</label>
                            <div class="col-md-3">
                                <standalone-btn-component v-model="color.name"></standalone-btn-component>
                            </div>
                            <div class="col-md-3">
                                <input type="hidden" v-model="color.id">
                                <input type="text" class="form-control" placeholder="Tên màu" v-model="color.name">
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control" placeholder="Số lượng"
                                       v-model="color.available">
                            </div>
                            <div class="col-md-3">
                                <div class="col-md-12 text-right">
                                    <button class="btn btn-warning" type="button" v-on:click="createNewColor(index)"><i
                                            class="fa fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-3"></div>
                            <div class="col-md-9">

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label  col-md-12">Size</label>
                                            <select data-placeholder="Vui lòng chọn size" tabindex="1"
                                                    v-model="productColors[index].name"
                                                    class="form-control custom-select">
                                                <option v-for="size in sizes" :key="size.id" :value="size.id">
                                                    {{size.name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label  col-md-12">Số lượng</label>
                                            <input type="number" class="form-control"
                                                   v-model="productColors[index].available">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="form-body">
                <div class="row">
                    <div class="col-md-6">
                        <standalone-btn-component v-model="formData.avatar"></standalone-btn-component>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row"><label class="control-label  col-md-12">Giới thiệu sản phẩm</label>
                            <div class="col-md-12" id="tinymce-editor">
                                <tiny-mce-component v-model="formData.intro"></tiny-mce-component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-6 text-center">
                    <button type="reset" class="btn btn-primary">Làm mới</button>
                    <button type="submit" class="btn btn-danger">Lưu thông tin</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "product-component",
        props: {
            urlGetBrand: {
                type: String,
                default: ''
            },
            urlGetSize: {
                type: String,
                default: ''
            }
        },
        created() {
            this.getBrands();
            this.getSizes();
        },
        updated() {
            this.initFilemanager()
        },
        data: function () {
            return {
                sizes: {},
                brands: {},
                colors: [
                    {id: 0, name: '', available: '', image: ''}
                ],
                productColors: [
                    {name: '', available: 0}
                ],
                status: [
                    {id: 1, name: 'Hoạt động'},
                    {id: 0, name: 'Khóa'}
                ],
                discounts: [
                    {id: 1, name: 'Có'},
                    {id: 0, name: 'Không'}
                ],
                formData: {
                    name: '',
                    slug: '',
                    avatar: 'abc123',
                    status: 1,
                    price: 0,
                    brand_id: 1,
                    price_discount: 0,
                    is_discount: 0,
                    intro: '',
                },
            }
        },
        methods: {
            getBrands() {
                const vm = this
                axios
                    .get(this.urlGetBrand)
                    .then(response => {
                        const res = response.data
                        if (res.data) {
                            vm.brands = res.data
                        }
                    })
            },
            getSizes() {
                const vm = this;
                axios
                    .get(this.urlGetSize)
                    .then(response => {
                        const res = response.data;
                        if (res.data) {
                            vm.sizes = res.data;
                        }
                    })
            },
            updateAvatarUrl(index) {
                const vm = this;
                const avatarInfo = $('#thumbnail' + index).val();
                if (avatarInfo.url) {
                    vm.colors[index].avatar = avatarInfo.url;
                }
            },
            createNewColor(key) {
                const vm = this;
                let colors = vm.colors;
                let productColors = vm.productColors;
                const color = {id: this.randomId, name: '', available: '', image: ''};
                const size =  {name: '', available: 0};
                colors.push(color);
                productColors.push(size);
                vm.colors = colors;
                vm.productColors = productColors;
            },
            initFilemanager() {
                this.$nextTick(function () {
                    $('.lfm').filemanager('image', {prefix: route_prefix});
                });
            },
            updateImagePath(id,target){
                const vm = this;
                const value = $('#'+id).val();
                if(value) {
                    $('#'+id).value = value;
                    vm.target = value;
                }
            },

        },
    }
</script>