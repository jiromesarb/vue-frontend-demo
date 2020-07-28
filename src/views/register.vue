<template id="">
    <div class="">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-6 mx-auto">
                <div class="alert" :class="{'alert-success': notif.status == 'success', 'alert-danger': notif.status == 'failed'}" role="alert" v-if="notif">
                    <div v-if="notif.status == 'failed'">
                        <div v-if="notif.errors">
                            <!-- <div v-for="(error, index) in notif.errors" :key="index">

                                {{ error }}
                            </div> -->
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
                    <div v-else>
                        {{ notif.message }}
                    </div>
                </div>
                <div class="card card-signin my-5">
                    <div class="card-header bg-light">Register User</div>
                    <div class="card-body">
                        <form method="POST" action="">
                            <div class="form-group row">
                                <label for="employee_number" class="col-md-4 control-label">Username</label>

                                <div class="col-md-6">
                                    <input id="username" type="text" class="form-control" name="username" value="" autofocus v-model="userData.username">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="userData.password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-10 offset-md-4">
                                    <button type="button" class="btn btn-primary" @click="register">
                                        Submit
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
    name: "register",
    data: () => ({
        userData: {
            username: '',
            password: '',
        },

        notif: '',
    }),

	created () {
		// this.usersIndex ()
	},
    methods: {


		register () {
            this.notif = '';
			this.axiosRequest ('POST', this.$store.state.app_url + 'user/register', this.userData)
			.then (res => {
                console.log(res.data);
                if(res.data.status.toString() == 'success'){
                    this.notif = res.data;
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
