import Vue from 'vue';
import Router from 'vue-router';

import Layout from 'src/views/layout';
import Login from 'src/views/login';
import Home from 'src/views/home';

Vue.use(Router);
const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: '/index',
        component: Home
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  }
];
const router = new Router({
  // mode: 'history',
  routes,
});
export default router;
