require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ProductComponent from './components/ProductComponent.vue';
import tinymce from 'vue-tinymce-editor'
import TinyMceComponent from "./components/TinyMceComponent";
import StandaloneBtnComponent from './components/StandaloneBtnComponent';
import {myMixin} from './plugins/mixin';
//hàm dùng chung
Vue.mixin(myMixin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('product-component', ProductComponent);
Vue.component('tinymce', tinymce);
Vue.component('tiny-mce-component', TinyMceComponent);
Vue.component('standalone-btn-component', StandaloneBtnComponent);

const router = new VueRouter({ mode: 'history'});
const app = new Vue(Vue.util.extend({ router })).$mount('#app');