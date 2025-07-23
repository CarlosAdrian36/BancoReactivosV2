<template>
  <dialog class="modal" :open="open">
    <div class="modal-box h-[620px] max-h-[80vh] overflow-y-auto">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4">
        <legend class="fieldset-legend">Creacion del Banco</legend>

        <label class="label">Nombre</label>
        <input type="text" class="input w-full" placeholder="Nombre del Banco" />

        <label class="label">Descripcion</label>
        <textarea
          class="textarea w-full max-w-[90vh] h-[317px]"
          placeholder="Descripcion del Banco"
        ></textarea>
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
interface Props {
  open: boolean;
}

defineProps<Props>();
</script>
