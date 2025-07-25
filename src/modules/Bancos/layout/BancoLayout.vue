<script setup lang="ts">
import FooterModal from '@/modules/common/components/FooterModal.vue';
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="fixed top-0 left-0 w-full z-50">
      <TopMenu />
    </div>
    <main class="flex-grow pt-24 pb-6">
      <router-view />
    </main>
    <footer>
      <FooterModal />
    </footer>
  </div>
</template>
