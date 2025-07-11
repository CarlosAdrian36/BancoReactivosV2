<script setup lang="ts">
import BancoCard from './BancoCard.vue';
// import BancoTable from './BancoTable.vue';
</script>

<template>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
  >
    <!-- mx-auto grid max-w-6xl grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 -->
    <BancoCard />
    <BancoCard />
    <!-- <BancoTable /> -->
  </div>
</template>
