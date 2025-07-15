<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="">
        <!-- header -->
        <slot name="header" />
      </div>
      <div class="my-5">
        <slot name="body" />
      </div>

      <div class="modal-action">
        <slot name="action" />
      </div>
    </div>
  </dialog>
  s
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
