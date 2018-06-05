import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import app from './app.vue';

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    mode: 'history',
    render: (_c) => {
        return _c(app);
    }
}).$mount('#app');
