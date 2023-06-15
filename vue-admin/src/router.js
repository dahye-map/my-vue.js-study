// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';
import List from './components/views/List.vue'

const routes = [
  // 상담배정 내역조회
  {
    path: '/',
    name: 'app',
    component: List,
  },
  {
    path: '/List',
    name: 'List',
    component: List,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});