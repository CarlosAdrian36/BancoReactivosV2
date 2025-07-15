<script setup lang="ts">
import ElaboradorList from '../views/elaboradorList.vue';
</script>

<template>
  <!-- mx-auto grid max-w-2xl grid-cols-1 gap-5 p-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 -->
  <div class="w-full bg-base-200 grid justify-center gap-4 mx-auto">
    <div class="mt-30 mx-50 grid gap-4">
      <ElaboradorList />
      <ElaboradorList />
      <ElaboradorList />
      <ElaboradorList />
    </div>
  </div>
</template>
