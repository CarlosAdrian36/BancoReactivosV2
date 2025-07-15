<template>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-5 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
  >
    <BancoCard />
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

  <FabButton @click="CustomModalOpen = true" position="bottom-left">
    <DeleteIcon />
  </FabButton>

  <!-- Modal con titulo y descripcion -->
  <InputModal
    placeholder="Ingrese el nombre del banco"
    Titulo="Nuevo Banco"
    descripcion=""
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue"
  />

  <FabButton @click="modalOpen = true">
    <AddIcon />
  </FabButton>
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/fabButton.vue';
import BancoCard from './BancoCard.vue';
import AddIcon from '@/modules/common/icon/addIcon.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import DeleteIcon from '@/modules/common/icon/deleteIcon.vue';

const modalOpen = ref(false);

const CustomModalOpen = ref(false);

const onNewValue = (bancoName: string) => {
  console.log({ bancoName });
};
</script>
