<template class="sin">
  <!-- Titulo y boton de crear -->
  <div class="bg-info-content h-60 flex items-center rounded-b-xl relative">
    <div class="flex flex-col sm:flex-row justify-between p-5 w-full">
      <div class="text-xl font-bold mb-4 sm:mb-0 border-base-300 text-neutral-content">
        Banco de Reactivos
      </div>
      <button class="btn w-full sm:w-auto">Agregar Banco de Reactivos</button>
    </div>
  </div>

  <div class="flex flex-wrap gap-6 justify-center -mt-14 relative z-10 border-4">
    <!-- //Tarjetas con informacion -->

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
  <!-- "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////" -->
  <div class="mx-26 border-4">
    <form class="filter">
      <input class="btn btn-square" type="reset" value="×" />
      <input class="btn" type="radio" name="frameworks" aria-label="Svelte" />
      <input class="btn" type="radio" name="frameworks" aria-label="Vue" />
      <input class="btn" type="radio" name="frameworks" aria-label="React" />
    </form>
  </div>

  <div class="overflow-x-auto border-4 border-indigo-600">
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
        <tr class="hover:bg-base-300 border-4">
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
            <button class="btn btn-xs">
              <RouterLink :to="`/t`"> Detalles </RouterLink>
            </button>
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
            <button class="btn btn-xs">Detalles</button>
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

  <!-- Modal Customizable con su boton -->
  <CustomModal :open="CustomModalOpen">
    <template #header>
      <h1>Eliminacion de banco</h1>
    </template>

    <template #body>
      <p>Se eliminara el banco con nombre: Bancos que no sirve</p>
    </template>

    <template #action>
      <div class="flex justify-end mx-5">
        <button @click="CustomModalOpen = false" class="btn mr-4">Close</button>
        <button type="submit" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </CustomModal>

  <!-- <FabButton @click="CustomModalOpen = true" position="bottom-left" fix="fixed">
    <DeleteIcon />
  </FabButton> -->

  <!-- Modal con titulo y descripcion -->
  <InputModal
    placeholder="Ingrese el nombre del banco"
    Titulo="Nuevo Banco"
    descripcion=""
    :open="modalOpen"
    @close="modalOpen = false"
    @value="bancosStore.addBanco"
  />

  <!-- <FabButton @click="modalOpen = true">
    <AddIcon />
  </FabButton> -->
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/fabButton.vue';
import AddIcon from '@/modules/common/icon/addIcon.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import DeleteIcon from '@/modules/common/icon/deleteIcon.vue';
import { useBancoStore } from '@/modules/BancoElaborador/store/banco.store';
import { RouterLink } from 'vue-router';
import ConfigIcon from '@/modules/common/icon/configIcon.vue';
import EditIcon from '@/modules/common/icon/editIcon.vue';
import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
import WarnIcon from '@/modules/common/icon/warnIcon.vue';
import ErrorIcon from '@/modules/common/icon/errorIcon.vue';

const modalOpen = ref(false);

const CustomModalOpen = ref(false);

const bancosStore = useBancoStore();

function saludar() {
  console.log('Hola desde Vue!');
}
</script>
<style scoped>
.sin {
  box-sizing: border-box;
}
</style>
