// main.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios)


Vue.config.productionTip = false;

import RegisterComponent from './components/RegisterComponent.vue';

const routes = [
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent
}
];

export default new Vuex.Store({
  module  : {},
  submitApplication: function(){
    axios
      .post('http://lamp-api.herokuapp.com/accounts/register', {
        first_name: '' + this.data.first_name,
        last_name: '' + this.data.last_name,
        email: '' + this.data.email,
        username: '' + this.data.username,
        gender: '' + this.data.gender
      }).then(function(res){console.log(res)}).catch(function(err){console.log(err.data)})
  }  
})




const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

