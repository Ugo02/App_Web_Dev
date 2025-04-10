import {createApp} from "vue"

import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"
import './main.css'

const routes = [
    {
        name : 'Home',
        path : '/',
        redirect : '/signin'
    },
    {
        name : 'SignIn',
        path : '/signin',
        component : SignIn
    },
    {
        name : 'SignUp',
        path : '/signup',
        component : SignUp
    }
]

const router = createRouter({
    history : createWebHashHistory(), 
    routes,
})


createApp(App)
.use(router)
.mount('#app')

