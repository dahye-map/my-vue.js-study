import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('@/App.vue'),
        },
        // {
        //     path: '/bar',
        //     name: 'bar',
        //     component: ()=> import('@/components/Bar.vue'),
        // },
    ],
});
export default router;