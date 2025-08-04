<template class="sin">
  <!-- Titulo y boton de crear -->
  <div class="bg-info-content h-60 flex items-center rounded-b-xl relative">
    <div class="flex flex-col sm:flex-row justify-between p-5 w-full">
      <div class="text-xl font-bold mb-4 sm:mb-0 border-base-300 text-neutral-content">
        Banco de Reactivos
      </div>
      <button @click="modalOpen = true" class="btn w-full sm:w-auto">
        Agregar Banco de Reactivos
      </button>
    </div>
  </div>

  <!-- "-------------------------------------------------------------  TARJETAS DE INFORNACION ------------------------------------------------------------" -->

  <div class="flex flex-wrap gap-6 justify-center -mt-14 relative z-10">
    <div class="card bg-base-200 w-80 h-44 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Bancos</div>
            <div class="stat-value">86</div>
            <div class="stat-desc">Bancos creados</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-200 w-80 h-44 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Terminado</div>
            <div class="stat-value">3</div>
            <div class="stat-desc">Bancos Revisados y listos para usar</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-base-200 shadow-sm">
      <div class="card-body">
        <div class="stats shadow bg-base-100">
          <div class="stat">
            <div class="stat-title">Construccion</div>
            <div class="stat-value">7</div>
            <div class="stat-desc">Bancos aun en revision o pendientes</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de Creacion de Banco -->
  <ModalCustom :open="modalOpen" />

  <!-- "------------------------------------------------------------- FILTROS  ------------------------------------------------------------" -->

  <!-- asdasdasdas -->
  <div class="flex flex-row justify-center mt-10">
    <form class="filter">
      <input class="btn btn-square" type="reset" value="×" />
      <input class="btn" type="radio" name="frameworks" aria-label="Terminado" />
      <input class="btn" type="radio" name="frameworks" aria-label="Construccion" />
    </form>
    <!-- Busqueda -->
    <div class="ml-10">
      <label class="input w-full">
        <svg class="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input ref="searchInput" type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">Ctrl</kbd>+
        <kbd class="kbd kbd-sm">K</kbd>
      </label>
    </div>
  </div>
  <!-- "------------------------------------------------------------- TABLA ------------------------------------------------------------" -->
  <div class="overflow-x-auto p-5">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Banco</th>
          <th>Estatus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-base-300">
          <th>1</th>
          <td>
            <div class="break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur animi
              placeat. Eveniet iure molestias saepe alias! Repellat quae aliquid hic, mollitia unde
              nam laboriosam, doloremque explicabo, porro eveniet cupiditate.= Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quod magnam deserunt quasi at ullam eaque autem
              perspiciatis consectetur sequi ipsum voluptatum, vel repellat. Animi dolor sit,
              voluptatum fuga ullam voluptas.
            </div>
          </td>
          <td>
            <div class="badge badge-success">
              <ValidadoIcon />
              Terminado
            </div>
          </td>
          <th>
            <RouterLink class="btn btn-xs" :to="`BancoDetalle`"> Detalles </RouterLink>
          </th>
        </tr>
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>
            <div class="break-words">Este es un Reactivo 2</div>
          </td>
          <td>
            <div class="badge badge-warning">
              <WarnIcon />
              Construccion
            </div>
          </td>
          <th>
            <RouterLink class="btn btn-xs" :to="`DetalleTraductor`">Detalles</RouterLink>
          </th>
        </tr>
        <tr class="hover:bg-base-300">
          <th>3</th>
          <td>
            <div class="break-words">Este es un Reactivo 3</div>
          </td>
          <td>
            <div class="badge badge-warning">
              <WarnIcon />
              Construccion
            </div>
          </td>
          <th>
            <button class="btn btn-xs">Detalles</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { RouterLink } from 'vue-router';

import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
import WarnIcon from '@/modules/common/icon/warnIcon.vue';
import ModalCustom from '@/modules/common/components/ModalCustom.vue';

const modalOpen = ref(false);

const searchInput = ref<HTMLInputElement | null>(null);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault(); // Evita abrir búsqueda del navegador
    if (searchInput.value) {
      searchInput.value.focus();
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
<style scoped>
.sin {
  box-sizing: border-box;
}
</style>
