<template>
  <div class="flex justify-center min-h-screen bg-base-200 p-4">
    <div class="card bg-base-100 w-full max-w-4xl shadow-sm p-4">
      <div class="card-body flex flex-col">
        No se si aqui va el nivel cognitivo y ademas los temas y subtemas
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Reactivo</legend>
          <input type="text" class="input" placeholder="Escribe el reactivo" />
          <!-- <p class="label">You can edit page title later on from settings</p> -->
        </fieldset>

        <label class="select">
          <span class="label">Tipo de Reactivo</span>
          <select>
            <option>Opcion Multiple</option>
            <option>Respuesat Multiple</option>
            <option>Abierto</option>
            <option>Drag and drop</option>
          </select>
        </label>

        <div tabindex="0" class="collapse collapse-plus bg-base-100 border-base-300 border">
          <div class="collapse-title font-semibold">Respuesta 1</div>
          <div class="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </div>
        </div>

        <textarea class="textarea" placeholder="Respuesta"></textarea>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Crear</button>
        </div>
      </div>
    </div>
  </div>
</template>
