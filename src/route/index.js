import Vue from 'vue';
import Router from 'vue-router';

import Layout from 'src/views/layout';
import Login from 'src/views/login';
import ForgetPwd from 'src/views/forgetPwd';
import Regist from 'src/views/regist';
import RegistSuccess from 'src/views/registSuccess'

import Learn from 'src/views/learn';
import Exam from 'src/views/exam';
import My from 'src/views/my';

Vue.use(Router);
const routes = [
  {
    path: '/',
    redirect: '/learn',
    component: Layout,
    children: [
      {
        path: '/learn',
        component: Learn,
      },
      {
        path: '/exam',
        component: Exam,
      },
      {
        path: '/my',
        component: My,
      }
    ],
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/forgetPwd',
    component: ForgetPwd,
  },
  {
    path: '/regist',
    component: Regist,
  },
  {
    path: '/regist-success',
    component: RegistSuccess,
  },
];
const router = new Router({
  // mode: 'history',
  routes,
});
export default router;
