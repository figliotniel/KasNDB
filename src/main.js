import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

// Inisialisasi aplikasi Vue
const app = createApp(App)

// Gunakan Pinia untuk state management
app.use(createPinia())

// Gunakan Vue Router untuk navigasi
app.use(router)

// Mount aplikasi ke elemen #app
app.mount('#app')
