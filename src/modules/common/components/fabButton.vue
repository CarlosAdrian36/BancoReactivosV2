<template>
  <button @click="$emit('click')" :class="['btn btn-circle  ', position, fix]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  fix?: 'fixed' | '';
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
  fix: 'fixed',
});

defineEmits(['click']);
</script>

<style scope>
@reference "tailwindcss"

.top-left {
  @apply top-10 left-10;
}
.top-right {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
.bottom-right {
  @apply bottom-10 right-10;
}
</style>
