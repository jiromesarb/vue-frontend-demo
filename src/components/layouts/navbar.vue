<template id="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Sample API</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="this.$store.state.isLoggedIn">
                        <router-link class="nav-link" to="/users">Search User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <div v-if="!this.isLoggedIn"> -->
                        <div v-if="!this.$store.state.isLoggedIn">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </div>
                        <div v-if="this.$store.state.isLoggedIn">
                            <a class="nav-link" href="" @click="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        data: () => ({
            isLoggedIn: false,
        }),
        mounted(){
            this.isLoggedIn = false
            this.isLoggedIn = localStorage.getItem('token') || false;
            // alert('sad');
            console.log(this.isLoggedIn)
            // console.log(localStorage.getItem('getLoggedIn'))
        },
        methods: {
            logout () {
                this.notif = '';
                this.isLoggedIn = false
                localStorage.setItem('getLoggedIn', false);
                this.$router.push('login');
                this.axiosRequest ('POST', this.$store.state.app_url + 'token/destroy')
                .then (res => {
                    // console.log(res.data);
                    if(res.data.status.toString() == 'success'){
                        // this.$store.state.token = '';
                        // this.$store.state.isLoggedIn = false;
                        localStorage.setItem('token', null);

                        // console.log(this.$store.state.token);
                    } else {
                        this.notif = res.data;
                    }
                })
                .catch (err => {
                    console.log (err);
                    this.users_loading = false
                })
            }
        }
    }
</script>
<style scoped>
</style>
