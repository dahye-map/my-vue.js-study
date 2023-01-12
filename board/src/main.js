import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

import './assets/css/common.css'

// Create Vue Instance
const app = createApp(App);

app.use(router); // 사용 설정 하기
app.mount('#app');