<script setup lang="ts">
import FooterModal from '@/modules/common/components/FooterModal.vue';
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="">
    <TopMenu />
    <main class="">
      <router-view />
    </main>
    <footer>
      <FooterModal />
    </footer>
  </div>
</template>
