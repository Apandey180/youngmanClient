import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../views/Home/SampleLayout.vue';
import Starter from '../views/Home/SamplePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/products',
      name: 'products',
      component:  () => import('../views/Components/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'single-products',
      component:  () => import('../views/Components/SingleProduct.vue')
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component:  () => import('../views/Components/Confirmation.vue')
  },
  {
      path: '/checkout',
      name: 'checkout',
      component:  () => import('../views/Components/Checkout.vue'),
      props: (route) => ({ pid: route.query.pid })
  },
  {
      path: '/dashboard',
      name: 'userboard',
      component:  () => import('../views/Components/UserBoard.vue'),
      meta: {
          requiresAuth: true,
          is_user: true
      }
  },
  {
      path: '/admin/:page',
      name: 'admin-pages',
      component:  () => import('../views/Components/Admin.vue'),
      meta: {
          requiresAuth: true,
          is_admin: true
      }
  },
  {
      path: '/admin',
      name: 'admin',
      component:  () => import('../views/Components/Admin.vue'),
      meta: {
          requiresAuth: true,
          is_admin: true
      }
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
  },
  beforeEach: (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('bigStore.jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('bigStore.user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                }
                else {
                    next({ name: 'userboard' })
                }
            }
            else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                }
                else {
                    next({ name: 'admin' })
                }
            }
            next()
        }
    } else {
        next()
    }
  }
});
