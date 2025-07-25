<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box w-full max-w-lg h-auto md:max-w-xl md:h-[500px]">
      <h3 class="text-lg font-bold">Crea un Reactivo</h3>

      <div class="">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Tema</legend>
          <select class="select">
            <option disabled selected>Selecciona un Tema</option>
            <option>Chrome</option>
            <option>FireFox</option>
            <option>Safari</option>
          </select>
          <legend class="fieldset-legend">Subtema</legend>
          <select class="select">
            <option disabled selected>Selecciona un subtema</option>
            <option>Chrome</option>
            <option>FireFox</option>
            <option>Safari</option>
          </select>
        </fieldset>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
          <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
