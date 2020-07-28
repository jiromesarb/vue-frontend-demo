import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Axios from 'axios'
import Vuex from 'vuex'
import mixins from './mixins'

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router'
import store from './store'
// import DataTable from './Datatable.vue'
// import 'datatables.net-bs4'
// import 'datatables.net';
// import 'datatables.net-bs';

const $ = require('jquery');
// var dt = require( 'datatables.net' )();
window.$ = $;
require( 'datatables.net' );
// require( 'datatables.net-bs' );
// window.dt = dt;


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$axios = Axios


new Vue({
    router,
    store,
    mixins: [mixins],
    render: h => h(App),
}).$mount('#app')
