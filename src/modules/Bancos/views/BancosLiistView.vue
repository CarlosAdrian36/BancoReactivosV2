<template>
  <div class="bg-info h-60">asd</div>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-5 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
  >
    <!-- <div>
      <form class="filter">
        <input class="btn btn-square" type="reset" value="×" />
        <input class="btn" type="radio" name="frameworks" aria-label="Terminado" />
        <input class="btn" type="radio" name="frameworks" aria-label="Construccion" />
        <input class="btn" type="radio" name="frameworks" aria-label="Revision" />
      </form>
    </div>
    <span class="status status-accent"></span>
    <div v-for="banco in bancosStore.bancoList" :key="banco.bancoId" class="hover">
      <div class="inline-grid *:[grid-area:1/1]">
        <div class="status status-error animate-ping"></div>
        <div class="status status-error"></div>
      </div>
      Revision

      <RouterLink :to="`/Administrado/${banco.bancoId}`">
        <div class="card bg-base-200 card-sm shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ banco.titulo }}</h2>
            <p>{{ banco.esCompartido }}</p>
            <div class="justify-end card-actions">
              <button @click.stop.prevent="CustomModalOpen = true" class="btn btn-circle btn-sm">
                <DeleteIcon />
              </button>
              <button @click.stop.prevent="saludar" class="btn btn-circle btn-ghost btn-sm">
                <EditIcon />
              </button>
              <button @click.stop.prevent="saludar" class="btn btn-circle btn-sm">
                <ConfigIcon />
              </button>
            </div>
          </div>
        </div>
      </RouterLink>
    </div> -->
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

  <FabButton @click="modalOpen = true">
    <AddIcon />
  </FabButton>
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

const modalOpen = ref(false);

const CustomModalOpen = ref(false);

const bancosStore = useBancoStore();

function saludar() {
  console.log('Hola desde Vue!');
}
</script>
