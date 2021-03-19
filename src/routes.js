import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './components/Router/login'
import home from './components/Home'
import profile from './components/Router/profile.vue'
import profileDetail from './components/Router/profileDetail.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/login', component: login},
        {path: '/profile', component: profile},
        {path: '/profile/:id', component: profileDetail}
    ]
})