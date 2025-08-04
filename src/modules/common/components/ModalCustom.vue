<template>
  <dialog class="modal" :open="open">
    <div class="modal-box h-[720px] max-h-[90vh] overflow-y-auto">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4">
        <label class="label">Nombre</label>
        <input type="text" class="input w-full" placeholder="Nombre del Banco" />

        <label class="label">Descripcion</label>
        <textarea
          class="textarea w-full max-w-[90vh] h-[317px]"
          placeholder="Descripcion del Banco"
        ></textarea>
        <!-- Traduccion -->
        <div class="flex flex-col">
          <label class="label pt-8">
            <input type="checkbox" v-model="isTraduccionEnabled" class="checkbox" />
            Traducir
          </label>

          <label class="label pt-2 gap-4">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="toggle toggle-md"
                :disabled="!isTraduccionEnabled"
                v-model="ingles"
              />
              Inglés
            </div>

            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="toggle toggle-md"
                :disabled="!isTraduccionEnabled"
                v-model="frances"
              />
              Francés
            </div>
          </label>
        </div>
      </fieldset>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isTraduccionEnabled = ref(false);
const ingles = ref(false);
const frances = ref(false);
interface Props {
  open: boolean;
}

defineProps<Props>();
</script>
