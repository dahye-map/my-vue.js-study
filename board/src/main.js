import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/css/common.css'

// Create Vue Instance
const app = createApp(App);

app.use(router); // 사용 설정 하기
app.use(VueAxios, axios)
app.mount('#app');

app.config.globalProperties.axios = axios;


// https://jsonplaceholder.typicode.com/posts