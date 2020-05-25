import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../views/Home/SampleLayout.vue';
import Starter from '../views/Home/SamplePage.vue';
import Register from '../views/Pages/Register.vue';
import Login from '../views/Pages/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          components: { default: Starter }
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Components/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Components/Login.vue')
    },
  ],
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
