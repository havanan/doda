<template>
    <div id="app">
        <editor
                api-key="no-api-key"
                :init="config"
        />
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'

    export default {
        name: "editor",
        components: {
            'editor': Editor
        },
        data: function () {
            return {

            }
        }
    }
</script>