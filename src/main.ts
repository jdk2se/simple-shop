import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
