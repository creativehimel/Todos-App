import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Task from "@/views/Task.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/task',
            name: 'task',
            component: Task
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
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

export default router