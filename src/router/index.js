import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Users from '../views/users.vue'
import store from './../store'

// initialize Vue router
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    },

    {
        path: '/users',
        name: 'users',
        component: Users,
        beforeEnter: (to, from, next) => {
            let userIsLogged = store.state.isLoggedIn

            if(userIsLogged){
                next() // changes route
            }
            else{
                next(false) // doesn't allow changing route, you can also do redirects here etc.
            }
        }
    }
];

const router = new VueRouter({
    routes,
    store
})

export default router
