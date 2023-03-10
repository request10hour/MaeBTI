import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag"

import './assets/main.css'

const app = createApp(App)

app.use(router);

app.use(VueGtag, {
    config: { id: "G-R6G1000PC0" },
}, router);

// 카카오 Api를 사용하기 위한 초기화
Kakao.init('c8c5cff519fa6008535d98e7ea7d11eb')

app.mount('#app')