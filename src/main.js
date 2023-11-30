import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import axios from "axios";
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";
import App from './App.vue'
import LoginView from './views/LoginView.vue'
import './index.css'

const routes = [
    { path: '/', component: LoginView},
    { path: '/login', component: LoginView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const toast_options = {};

export const api = axios.create({baseURL: import.meta.env.VITE_API_BASE_URL})

// Create the app instance and use the router
const app = createApp(App)
app.use(router)
app.use(Toast, toast_options);

// Mount the app to the #app element in your HTML
app.mount('#app')
