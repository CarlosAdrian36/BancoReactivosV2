import { authRoutes } from '@/modules/auth/routes';
import BancoRevisor from '@/modules/BancoAdmin/layout/BancoRevisor.vue';
import BancoLayout from '@/modules/Bancos/layout/BancoLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'bancosAdmin' },
      component: BancoLayout,
      children: [
        {
          path: 'bancosAdmin',
          name: 'bancosAdmin',
          component: () => import('@/modules/Bancos/views/BancosLiistView.vue'),
          children: [
            {
              path: 'bancos/card',
              name: 'card',
              component: () => import('@/modules/Bancos/views/BancoCard.vue'),
            },
          ],
        },
        {
          path: '/Revisor',
          name: 'Revisor',
          component: BancoRevisor,
        },
      ],
    },

    authRoutes,
  ],
});

export default router;
