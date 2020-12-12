require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ProductComponent from './components/ProductComponent.vue';
import TinyMce from './components/TinyMce.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('product-component', ProductComponent);
Vue.component('tiny-mce', TinyMce);

const router = new VueRouter({ mode: 'history'});
const app = new Vue(Vue.util.extend({ router })).$mount('#app');



