<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <TopMenu />
    <main class="flex flex-row">
      <router-view />
    </main>
  </div>
</template>
