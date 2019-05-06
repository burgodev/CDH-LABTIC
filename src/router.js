import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import LoginBurgo from './views/LoginBurgo.vue';
import CdhBurgo from './views/CdhBurgo.vue';
import UsersBurgo from './views/UsersBurgo.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/loginBurgo',
            name: 'loginBurgo',
            component: LoginBurgo
        },
        {
            path: '/cdhBurgo',
            name: 'cdhBurgo',
            component: CdhBurgo
        },
        {
            path: '/usersburgo',
            name: 'UsersBurgo',
            component: UsersBurgo
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});
//# sourceMappingURL=router.js.map