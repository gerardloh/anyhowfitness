import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"

import { createApp } from 'vue'
import { VueFire} from 'vuefire'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase'


const app = createApp(App)

app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [],
})

app.mount('#app')
