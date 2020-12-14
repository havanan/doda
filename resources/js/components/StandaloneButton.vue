<template>
    <div class="form-group row"><label class="control-label  col-md-12">Ảnh đại diện</label>
        <div class="col-md-8">
            <div class="input-group"><span class="input-group-btn"><a
                    data-input="thumbnail"
                    data-preview="holder"
                    class="btn btn-primary text-white lfm"><i
                    class="fa fa-picture-o"></i> Chọn ảnh
                                                         </a></span> <input id="thumbnail" type="text" name="avatar"
                                                                            v-model="formData.avatar" class="form-control"
                                                                            style="display: none;"></div>
        </div>
        <div class="col-md-4">
            <div id="holder" style="max-height: 200px;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StandaloneButton",
        props: ['id' ,'avatar' ,''],
        updated() {
            this.initFilemanager()
        },
        methods: {
            initFileManager() {
                this.$nextTick(function () {
                    $('.lfm').filemanager('image', {prefix: route_prefix});
                });
            }
        }
    }
</script>

<style scoped>

</style>