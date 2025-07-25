import { authRoutes } from '@/modules/auth/routes';
import BancoRevisor from '@/modules/BancoRevisor/layout/BancoRevisor.vue';
import ElaboradorList from '@/modules/BancoElaborador/views/elaboradorList.vue';
// import BancosElaborador from '@/modules/BancoElaborador/layout/BancosElaborador.vue';
import BancoLayout from '@/modules/Bancos/layout/BancoLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ElaboradorCard from '@/modules/BancoElaborador/views/elaboradorCard.vue';
// import BancoTable from '@/modules/Bancos/views/BancoTable.vue';
import BancoDetalle from '@/modules/Bancos/views/bancoDetalle.vue';
import DetalleReactivo from '@/modules/Bancos/views/DetalleReactivo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'Administrador' },
      component: BancoLayout,
      children: [
        {
          path: 'Administrador',
          name: 'Administrador',
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
          path: 'Administrado/:bancoId',
          name: 'Administrado',
          // props: true,
          component: () => import('@/modules/Bancos/views/bancoDetalle.vue'),
        },
        {
          path: 'BancoDetalle',
          name: 'BancoDetalle',
          component: BancoDetalle,
        },
        {
          path: '/Revisor',
          name: 'Revisor',
          component: BancoRevisor,
        },
        {
          path: '/Elaborador',
          name: 'Elaborador',
          component: ElaboradorList,
        },
        {
          path: '/Crearbanco',
          name: 'CrearBanco',
          component: ElaboradorCard,
        },
        {
          path: '/DetaleReactivo',
          name: 'DetaleReactivo',
          component: DetalleReactivo,
        },
      ],
    },

    authRoutes,
  ],
});

export default router;
