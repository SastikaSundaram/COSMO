import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as THREE from 'three'

// First create the app
const app = createApp(App)

// Then configure global properties
app.config.globalProperties.$THREE = THREE

// Then use plugins
app.use(router)
app.use(store)

// Finally mount
app.mount('#app')