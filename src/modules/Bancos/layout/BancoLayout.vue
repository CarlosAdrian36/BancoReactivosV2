<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="">
    <TopMenu />
    <main class="">
      <router-view />
    </main>
  </div>
</template>
