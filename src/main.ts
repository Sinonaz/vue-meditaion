import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '@/routes.ts'

const app = createApp(App)
const router = createRouter({history: createMemoryHistory(), routes})
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
