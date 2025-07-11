import { authRoutes } from '@/modules/auth/routes';
import BancoLayout from '@/modules/Bancos/layout/BancoLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'bancos' },
      component: BancoLayout,
      children: [
        {
          path: 'bancos',
          name: 'bancos',
          component: () => import('@/modules/Bancos/views/BancosLiistView.vue'),
          children: [
            {
              path: 'bancos/card',
              name: 'card',
              component: () => import('@/modules/Bancos/views/BancoCard.vue'),
            },
          ],
        },
      ],
    },
    authRoutes,
  ],
});

export default router;
