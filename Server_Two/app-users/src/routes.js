import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/views/Profile';
import List from '@/views/List';
import Register from '@/views/Register';
import User from '@/views/User';
import Institution from '@/views/Institution';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/institution',
            name: 'Institution',
            component: Institution
        },
    ],
    linkActiveClass: 'active'
});
