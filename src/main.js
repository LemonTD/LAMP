// main.js

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

import RegisterComponent from './components/RegisterComponent.vue';

const routes = [
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent
}
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');