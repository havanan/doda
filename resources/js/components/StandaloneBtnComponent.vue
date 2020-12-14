<template>
    <div class="form-group row"><label class="control-label  col-md-12">Ảnh đại diện</label>
        <div class="col-md-8">
            <div class="input-group"><span class="input-group-btn"><a
                    :data-input="'thumbnail'+id"
                    :data-preview="'holder'+id"
                    class="btn btn-primary text-white lfm"><i
                    class="fa fa-picture-o"></i> Chọn ảnh
                                                         </a></span> <input :id="'thumbnail'+id" type="text" name="avatar"
                                                                            v-model="dataInput" class="form-control"></div>
        </div>
        <div class="col-md-4">
            <div :id="'holder'+id" style="max-height: 200px;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StandaloneBtnComponent",
        props: ['value'],
        computed: {
            // Mutating the prop :(
            dataInput: {
                get: function(){
                    return this.value;
                },
                set: function(newValue){
                    const vm = this;
                    const avatar = $('#thumbnail'+vm.id).val();
                    this.$emit('input', avatar)
                }
            },
        },
        updated() {
            this.initFilemanager()
        },
        data() {
            return {
                id: this.randomId()
            }
        },
        methods: {
            initFileManager() {
                this.$nextTick(function () {
                    $('.lfm').filemanager('image', {prefix: route_prefix});
                });
            },

        }
    }
</script>

<style scoped>

</style>