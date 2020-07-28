<template id="">
    <div class="">
        <div class="row justify-content-center">
            <div class="col-sm-9 col-md-7 col-lg-6 mx-auto">

                <div class="alert alert-danger" role="alert" v-if="notif">
                    <div v-if="notif.errors">
                        <div v-for="(v, k) in notif.errors" :key="k">
                            <p v-for="error in v" :key="error" class="text-sm m-0">
                                {{ error[0] }}
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        {{ notif.message }}
                    </div>
                </div>
                <div class="card card-signin my-5">
                    <div class="card-header bg-white">Login</div>
                    <div class="card-body">
                        <form method="POST" action="">
                            <div class="form-group row">
                                <!-- {{ login_user.username }} -->
                                <label for="employee_number" class="col-md-4 control-label">Username</label>
                                <div class="col-md-6">
                                    <input id="username" type="text" class="form-control" name="username" value="" v-model="userCreds.username" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="userCreds.password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-10 offset-md-4">
                                    <button type="button" class="btn btn-primary" @click="login">
                                        Login
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data: () => ({
        userCreds: {
            username: '',
            password: '',
        },

        notif: '',
    }),

	created () {
		// this.usersIndex ()
	},
    methods: {


		login () {
            this.notif = '';
			this.axiosRequest ('POST', this.$store.state.app_url + 'user/login', this.userCreds)
			.then (res => {
                if(res.data.status.toString() == 'success'){
                    console.clear();
                    // console.log(res.data);
                    this.$store.state.token = res.data.data;
                    this.$store.state.isLoggedIn = true;

                    localStorage.setItem('token', res.data.data);
                    localStorage.setItem('getLoggedIn', true);
                    // console.log(this.$store.state.token);
                    this.$router.push('users');
                    // console.log(localStorage.getItem('token'));
                } else {
                    this.notif = res.data;
                }
			})
			.catch (err => {
				console.log (err);
				this.users_loading = false
			})
		}
    },

}
</script>
