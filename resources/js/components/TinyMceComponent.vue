<template>
    <tinymce :id="id" v-model="dataInput" :other_options="options"></tinymce>
</template>

<script>
    export default {
        name: "TinyMceComponent",
        props: ['data','id'],
        computed: {
            // Mutating the prop :(
            dataInput: {
                get: function(){
                    return this.data;
                },
                set: function(newValue){
                    this.$emit('update:data', newValue)
                }
            },
        },
        data: function () {
            return {
                options: {
                    height: '700',
                    path_absolute: this.route_prefix,
                    relative_urls: false,
                    file_browser_callback: function (field_name, url, type, win) {
                        const x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                        const y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

                        let cmsURL = '/laravel-filemanager?field_name=' + field_name;
                        if (type === 'image') {
                            cmsURL = cmsURL + "&type=Images";
                        } else {
                            cmsURL = cmsURL + "&type=Files";
                        }

                        tinyMCE.activeEditor.windowManager.open({
                            file: cmsURL,
                            title: 'Filemanager',
                            width: x * 0.8,
                            height: y * 0.8,
                            resizable: "yes",
                            close_previous: "no"
                        });
                    }
                }
            }}
    }
</script>
