import Vue from 'vue';

export default Vue.mixin({

	data: function() {
		return {
			// isLoggedIn: 'sad',
		}
	},
	methods: {

		/**
		* General Mixins
		*/
		sampleF(){
			alert('sad');
		},

		number_format (x) {
			x = parseFloat(x).toFixed(2)
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		str_limit (str, limit = 50) {

			var r = str.substring(0,limit)
			if (str.length > limit) {
				r = r + '..'
			}
			return r
		},

		// STR SLUG
		str_slug (title) {
			var slug = "";
			// Change to lower case
			var titleLower = title.toLowerCase();
			// Letter "e"
			slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
			// Letter "a"
			slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
			// Letter "o"
			slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
			// Letter "u"
			slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
			// Letter "d"
			slug = slug.replace(/đ/gi, 'd');
			// Trim the last whitespace
			slug = slug.replace(/\s*$/g, '');
			// Change whitespace to "-"
			slug = slug.replace(/\s+/g, '-');

			return slug;
		},

		now () {
			const toTwoDigits = num => num < 10 ? '0' + num : num;
			let today = new Date();
			let year = today.getFullYear();
			let month = toTwoDigits(today.getMonth() + 1);
			let day = toTwoDigits(today.getDate());
			return `${year}-${month}-${day}`;
		},

		ucfirst(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		redirect (route_name, params = {}, query = {}) {
			this.$router.push({ name: route_name , params : params, query: query })
		},

		// method, url, params, options
		// axiosRequest (method, url, params, headers, api_token = true) {
		axiosRequest (method, url, params) {

			//  CHECK GET PARAMS
			url =  (url.includes('?') ? url + '&' : url + '?')
			// CHECK API TOKEN AND UI Append
			// api_token = '';
			// url = (api_token == true ? url + 'at=' + this.$session.get('_at') + '&cid=' + this.$session.get('_cid') : url)

			// ***************
			// headers = {
			// 	'Content-Type': 'application/json',
			// 	'Authorisation': 'Bearer ' + localStorage.getItem('token')
			// }
			console.log('bearer ' + localStorage.getItem('token'));
			if(this.$store.state.isLoggedIn === true){
				// token = 'Authorisation': 'Bearer ' + this.$store.state.token
			}
			const instance = this.$axios({
				method: method,
				url: url,
				data: params,
				// headers: headers,
				// timeout: 60000,
				responseType: 'json',
				headers: {
					Authorization: "Bearer " + localStorage.getItem('token'),
				}
			});

			// ***************
			// let checker = instance
			// ***************
			// checker.then(res => {
			// 	if (res.data.status == 'middleware_failed') {
			// 		this.clearSession()
			// 		window.location.href = this.$store.state.app_url + '/#/login?s=err&m=' + res.data.message
			// 	}
			// })
			// checker.catch(error => {
			// 	console.log({request_error: error})
			//
			// })
			// RETURN INSTANCE
			return instance;
		},

	}
})
