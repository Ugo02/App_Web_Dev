import {createApp} from "vue"

import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"
import MovieRating from "./components/MoviesRating.vue"
import './styles/base.css'
import './styles/layout.css'
import './styles/header.css'
import './styles/form.css'
import './styles/input.css'
import './styles/button.css'
import './styles/MoviesRating.css'

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
    },
    {
        name : 'MovieRating',
        path : '/movies',
        component : MovieRating
    }
]

const router = createRouter({
    history : createWebHashHistory(), 
    routes,
})


createApp(App)
.use(router)
.mount('#app')

