<script setup lang="ts">
import FooterModal from '@/modules/common/components/FooterModal.vue';
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="" >
      <TopMenu />
    </div>
    <main class="flex-grow">
      <router-view />
    </main>
    <footer>
      <FooterModal />
    </footer>
  </div>
</template>
