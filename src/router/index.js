import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/auth';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        login: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  const authRequired = to.meta.login
  const user = auth.currentUser;

  if (authRequired && !user) {
    next('/login');
  } else {
    next();
  }
})

export default router
