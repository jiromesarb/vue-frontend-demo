import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store =  new Vuex.Store({
    state: {

		/**
		 * Global Variable
		 *
		 *
		 */
		app_url: 'http://localhost/sample/exam-api-lumen/api/',
		project_name: 'Client Dashboard | TK',
		backend: 'kk',
        token: '',
        isLoggedIn: false,

		/**
		 * Backends
		 *
		 */
		bb: '',

    },

    mutations:{

    }


})

export default store
