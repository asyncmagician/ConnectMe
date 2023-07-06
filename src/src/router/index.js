import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signIn',
            name: 'sign-in',
            component: SignIn
        },
        {
            path: '/signUp',
            name: 'sign-up',
            component: SignUp
        }
    ]
})

export default router
