import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import type { BancoReactivo } from '@/modules/Bancos/interfaces/bancoInterface';

export const useBancoStore = defineStore('bancos', () => {
  const bancos = ref<BancoReactivo[]>([]);

  return {
    //Properties
    // bancos,
    //Getters
    bancoList: computed(() => [...bancos.value]),

    //Actions
  };
});
