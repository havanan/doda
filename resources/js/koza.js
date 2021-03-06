require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import tinymce from 'vue-tinymce-editor'
import TinyMceComponent from "./components/TinyMceComponent";
import {myMixin} from './plugins/mixin';
//hàm dùng chung
Vue.mixin(myMixin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('tinymce', tinymce);
Vue.component('tiny-mce-component', TinyMceComponent);

const router = new VueRouter({ mode: 'history'});
const app = new Vue(Vue.util.extend({ router })).$mount('#app');