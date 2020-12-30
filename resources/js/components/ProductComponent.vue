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
                                                          required="required" class="form-control" min="0"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row">
                            <label class="control-label  col-md-12">Giá giảm</label>
                            <div class="col-md-12"><input type="number" name="price_discount"
                                                          v-model="formData.price_discount"
                                                          class="form-control" min="0"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Giá giảm</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn" tabindex="1"
                                        v-model="formData.is_discount" class="form-control custom-select">
                                    <option value="">Vui lòng chọn loại giá</option>
                                    <option v-for="discount in discounts" :key="discount.id" :value="discount.id">
                                        {{discount.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Loại sản phẩm</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn nhãn hiệu"
                                        name="product_type_id"
                                        tabindex="1"
                                        v-model="formData.product_type_id"
                                        v-html="makeTypesMenu()"
                                        class="form-control custom-select"
                                        required>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Nhãn hiệu</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn nhãn hiệu" name="brand_id" tabindex="1" v-model="formData.brand_id" class="form-control custom-select" required>
<!--                                    <option value="">Vui lòng chọn nhãn hiệu</option>-->
                                    <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{brand.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group row"><label class="control-label  col-md-12">Trạng thái</label>
                            <div class="col-md-12">
                                <select data-placeholder="Vui lòng chọn trạng thái" tabindex="1" v-model="formData.status" name="status" class="form-control custom-select" required>
                                    <option value="">Vui lòng chọn trạng thái</option>
                                    <option v-for="item in status" :key="item.id" :value="item.id">{{item.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h3 class="box-title">Thuộc tính sản phẩm</h3>
                    </div>
                    <div class="col-md-6 text-right">
                        <h3 class="box-title">Số lượng: <span class="text-danger">{{formData.reviews}}</span></h3>
                        <input type="hidden" name="reviews" v-model="formData.reviews">
                    </div>
                </div>
                <hr class="m-t-0 m-b-40">
                <div class="row">
                    <div v-for="(color,index) in colors" class="col-md-12">
                        <div class="form-group row">
                            <label class="control-label  col-md-12"><strong>Màu sắc</strong></label>
                            <div class="col-md-3">
                                <div class="form-group row"><label class="control-label  col-md-12">Ảnh màu</label>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                                <a :data-input="'thumbnail-color'+index" :data-preview="'holder-color'+index" class="btn btn-primary text-white lfm">
                                                    <i class="fa fa-picture-o"></i> Chọn ảnh
                                                </a>
                                            </span>
                                            <input :id="'thumbnail-color'+index" type="text" :name="'color['+index+'][avatar]'" class="form-control hide-item"></div>
                                    </div>
                                    <div class="col-md-12">
                                        <div :id="'holder-color'+index" class="mt-2"></div>
                                    </div>
                                </div>
                            </div>
                           <div class="col-md-9">
                            <!--màu sắc-->
                               <div class="row mb-2">
                                   <div class="col-md-5">
                                       <div class="form-group">
                                           <label class="control-label">Tên màu</label>
                                           <input type="text" class="form-control" placeholder="Vd: đen,đỏ,trắng..." v-model="color.name" :name="'color['+index+'][name]'">
                                       </div>
                                   </div>
                                   <div class="col-md-5">
                                       <div class="form-group">
                                           <label class="control-label">Số lượng</label>
                                           <input type="number" class="form-control" :name="'color['+index+'][available]'"
                                                  v-model="color.available" v-on:change="updateColorTotal()">
                                       </div>
                                   </div>
                                   <div class="col-md-2">
                                   </div>
                               </div>
                               <!--/màu sắc-->
                                <!--size-->
                               <div class="row size-item" v-if="color.product_sizes && color.product_sizes.length > 0" v-for="(size,key) in color.product_sizes" :key="key">
                                   <div class="col-md-4">
                                       <div class="form-group">
                                           <label class="control-label  col-md-12">Size</label>
                                           <select tabindex="1"
                                                   :name="'color['+index+'][sizes]['+key+'][name]'"
                                                   v-model="size.name"
                                                   class="form-control custom-select">
                                               <option value="">Vui lòng chọn size</option>
                                               <option v-for="size in sizes" :key="size.name" :value="size.name">
                                                   {{size.name}}
                                               </option>
                                           </select>
                                       </div>
                                   </div>
                                   <div class="col-md-4">
                                       <div class="form-group">
                                           <label class="control-label  col-md-12">Số lượng</label>
                                           <input type="number" class="form-control"  :name="'color['+index+'][sizes]['+key+'][available]'" v-model="size.available" value="0" min="0" v-on:change="updateSizeTotal(index)">
                                       </div>
                                   </div>
                                   <div class="col-md-4">
                                       <button class="btn btn-dark center-div" type="button" v-on:click="deleteSize(index,key)"><i class="fa fa-close"></i></button>
                                   </div>
                               </div>
                               <div class="row mb-2">
                                   <div class="col-md-12 text-right">
                                       <button class="btn btn-pinterest center-div text-white" type="button" v-on:click="createNewSize(index)">
                                           <i class="fa fa-plus"></i> Thêm size
                                       </button>
                                   </div>
                               </div>
                               <!--/size-->
                               <div class="row">
                                   <div class="col-md-12 text-right">
                                       <button class="btn btn-warning" type="button" v-on:click="createNewColor()">
                                           <i class="fa fa-plus"></i> Thêm màu
                                       </button>
                                       <button class="btn btn-dark center-div ml-2" type="button" v-on:click="deleteColor(index)"><i class="fa fa-close"></i></button>
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
                            <div class="col-md-12">
                                <tiny-mce-component v-model="formData.intro" ></tiny-mce-component>
                                <textarea id="tta-intro" name="intro" class="hide-item"></textarea>
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
            },
            urlGetType: {
                type: String,
                default: ''
            },
            productId: {
                type: Number,
                require: false
            }
        },
        computed: {
            intro() {
                return this.formData.intro
            }
        },
        watch: {
            intro(newValue) {
                if (newValue) {
                    $('#tta-intro').val(newValue)
                }
            }
        },
        created() {
            this.getBrands();
            this.getSizes();
            this.getTypes();
            this.getProductInfo();
        },
        updated() {
            this.initFileManager()
        },
        data: function () {
            return {
                sizes: {},
                brands: {},
                types: {},
                colors: [
                    {id: this.randomId(), name: '', available: 0, image: '',product_sizes: [ {name: '', available: 0} ]}
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
                    avatar: '',
                    intro: '',
                    product_type_id:'',
                    status: 1,
                    price: 0,
                    brand_id: 1,
                    price_discount: 0,
                    is_discount: 0,
                    reviews:0
                },
                total: 0
            }
        },
        methods: {
            getBrands() {
                const vm = this;
                axios
                    .get(this.urlGetBrand)
                    .then(response => {
                        const res = response.data;
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
            getTypes() {
                const vm = this;
                axios
                    .get(this.urlGetType)
                    .then(response => {
                        const res = response.data;
                        if (res.data) {
                            vm.types = res.data;
                        }
                    })
            },
            getProductInfo(){
                const vm = this;

                if (this.productId) {
                    const urlGetInfo = '/adm/product/get-by-id/'+this.productId;
                    axios
                        .get(urlGetInfo)
                        .then(response => {
                            const res = response.data;
                            if (res.data) {
                                vm.formData = res.data;
                                if (res.data.intro){
                                    vm.formData.intro = unescape(res.data.intro);
                                }
                                if (res.data.colors){
                                    vm.colors = res.data.colors;
                                }
                            }
                        })
                }
            },
            updateAvatarUrl(index) {
                const vm = this;
                const avatarInfo = $('#thumbnail' + index).val();
                if (avatarInfo.url) {
                    vm.colors[index].avatar = avatarInfo.url;
                }
            },
            createNewColor() {
                const vm = this;
                let colors = vm.colors;
                let product_sizes = [];
                const size =  {name: '', available: 0};
                product_sizes.push(size);
                const color = {id: this.randomId, name: '', available: '', image: '',product_sizes: product_sizes};
                colors.push(color);
                vm.colors = colors;
            },
            deleteColor(key){
                const vm = this;
                let colors = vm.colors;
                this.colors = this.deleteItemArrayByIndex(colors,key);
                this.updateColorTotal();
            },
            createNewSize(index) {
                const vm = this;
                let colors = vm.colors;
                if (colors[index].product_sizes) {
                    let product_sizes = colors[index].product_sizes;
                    const size =  {name: '', available: 0};
                    product_sizes.push(size);
                    colors[index].product_sizes = product_sizes;
                    vm.colors = colors;
                }
            },
            deleteSize(index,size_id){
                const vm = this;
                let colors = vm.colors;
                if (colors[index].product_sizes) {
                    let product_sizes = colors[index].product_sizes;
                     product_sizes =  this.deleteItemArrayByIndex(product_sizes,size_id);
                     this.colors[index].product_sizes = product_sizes;
                     this.updateSizeTotal(index);
                }
            },
            deleteItemArrayByIndex(arr,index){
                if (arr[index]){
                    let newArr = [];
                   for (let i = 0; i < arr.length; i++ ){
                       if (i !== index) {
                           newArr.push(arr[i])
                       }
                   }
                   return newArr;
                }else {
                   return arr;
                }
            },
            initFileManager() {
                this.$nextTick(function () {
                    $('.lfm').filemanager('image', {prefix: route_prefix});
                });
            },
            getTypeName(data) {
                if (data.name) {
                    return  '--- ' + data.name;
                }
            },
            makeTypesMenu() {
                const vm = this;
                const data = vm.types;
                let menu = '<option value="">Vui lòng chọn loại sản phẩm</option>';
                //Tạo menu cha
                for (let i = 0;i < data.length; i++) {
                    const parent = data[i];
                        menu += '<option value="'+parent.id+'">'+parent.name+'</option>';
                    const children = parent.children;
                    //Tạo menu con
                    for (let j = 0; j < children.length; j++) {
                        if (children[j]) {
                            menu += '<option value="'+children[j].id+'">'+ this.getTypeName(children[j]) +'</option>';
                        }
                    }
                }
                return menu;
            },
            updateColorTotal(){
                const vm = this;
                let total = 0;
                const colors = vm.colors;
                
                if(colors.length) {
                    for (let i = 0; i < colors.length; i++) {
                        if (colors[i].available){
                            total += parseInt(colors[i].available);
                        }
                    } 
                }
                this.formData.reviews = total;
            },
            updateSizeTotal(key){
                const vm = this;
                const colors = vm.colors;
                let total = 0;
                if (colors[key]){
                    let color = colors[key];
                    let product_sizes = color.product_sizes;
                    if(product_sizes.length) {
                        for (let i = 0; i < product_sizes.length; i++) {
                            if (product_sizes[i].available){
                                total += parseInt(product_sizes[i].available);
                            }
                        }
                    }
                    color.available = total;
                    this.colors[key] = color;
                    this.updateColorTotal();
                }
            }
        },
    }
</script>