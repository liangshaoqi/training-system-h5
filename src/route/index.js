import Vue from 'vue';
import Router from 'vue-router';

import Login from 'src/views/login';
import ForgetPwd from 'src/views/forgetPwd';

import Home from 'src/views/home';

Vue.use(Router);
const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/forgetPwd',
    component: ForgetPwd,
  }
];
const router = new Router({
  // mode: 'history',
  routes,
});
export default router;
