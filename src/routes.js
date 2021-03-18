import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './components/Router/login'
import home from './components/Home'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/login', component: login, name: 'login'}
    ]
})