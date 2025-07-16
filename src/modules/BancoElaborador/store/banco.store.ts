import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import type { BancoReactivo } from '@/modules/Bancos/interfaces/bancoInterface';
import { useLocalStorage } from '@vueuse/core';

export const useBancoStore = defineStore('bancos', () => {
  const bancos = ref(useLocalStorage<BancoReactivo[]>('bancos', []));

  const addBanco = (name: string) => {
    if (name.length === 0) return;
    bancos.value.push({
      bancoId: uuidv4(),
      titulo: name,
      descripcion: '',
      esCompartido: false,
    });
  };

  return {
    //Properties
    // bancos,
    //Getters
    bancoList: computed(() => [...bancos.value]),

    //Actions
    addBanco,
  };
});
