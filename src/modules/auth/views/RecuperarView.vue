<template>
  <!-- <div class="w-full">
    <h1 class="text-2xl font-semibold mb-4">Restaurar contraseña</h1>
    <form @submit.prevent="">
      <div class="mb-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Usuario</legend>
          <input type="text" class="input" placeholder="" />
          <p class="label">Optional</p>
        </fieldset>
      </div>

      <div class="mb-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Correo Electronico</legend>
          <input type="text" class="input" placeholder="" />
        </fieldset>
      </div>

      <div class="mb-6">
        <RouterLink class="link" to="login"> Login </RouterLink>
      </div>

      <button class="btn btn-block">Enviar Solicitud</button>
    </form>
  </div> -->
  <div class="flex flex-col">
    <h1 class="text-2xl font-semibold mb-4">Restaurar contraseña</h1>
    <div>
      <form @submit.prevent="">
        <div class="mb-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Usuario</legend>
            <input type="text" class="input" placeholder="" />
            <!-- <p class="label">Optional</p> -->
          </fieldset>
        </div>

        <div class="mb-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Correo Electronico</legend>
            <input type="text" class="input" placeholder="" />
          </fieldset>
        </div>

        <div class="mb-6">
          <RouterLink class="link" to="login"> Login </RouterLink>
        </div>

        <button class="btn btn-block">Enviar Solicitud</button>
      </form>
    </div>
  </div>
</template>
