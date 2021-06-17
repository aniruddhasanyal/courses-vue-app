import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global style
import '@/assets/styles/main.css'

// Screen size compatibility styles.
import '@/assets/styles/screen_compatibility/mobile.css'
import '@/assets/styles/screen_compatibility/tab-potrait.css'
import '@/assets/styles/screen_compatibility/tab-landscape.css'
import '@/assets/styles/screen_compatibility/large.css'

const app = createApp(App)

app.use(router)
app.mount('#app')