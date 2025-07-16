<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ Titulo }}</h3>
      <p v-if="descripcion" class="py-4">{{ descripcion }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            v-model="inputValue"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';

interface Props {
  open: boolean;
  Titulo: string;
  placeholder?: string;
  descripcion?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(props, async ({ open }) => {
  if (open) {
    await nextTick();
    setTimeout(() => {
      inputRef.value?.focus();
    }, 100);
  }
});

const submitValue = () => {
  console.log({ value: inputValue.value });
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }
  emits('value', inputValue.value.trim());
  emits('close');
  inputValue.value = '';
};
</script>
