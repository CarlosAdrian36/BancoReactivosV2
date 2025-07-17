<template>
  <div>Crerador List</div>

  <!-- <elaboradorCard /> -->

  <RouterLink to="/CrearBanco">
    <FabButton>
      <AddIcon />
    </FabButton>
  </RouterLink>
</template>

<script lang="ts" setup>
// import { useBancoStore } from '../store/banco.store';
import FabButton from '@/modules/common/components/fabButton.vue';
import AddIcon from '@/modules/common/icon/addIcon.vue';

// const { bancoList } = useBancoStore();
</script>
