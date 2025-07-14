<template>
  <form @submit.prevent="">
    <div class="flex flex-row gap-36">
      <h1 class="text-2xl font-semibold mb-4 content-center">Inciar Sesion</h1>
      <img src="@/assets/login/uanl-logo-v-color.png" class="img w-10" />
    </div>

    <div class="mb-4">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Usuario</legend>
        <input type="text" class="input" placeholder="" />
      </fieldset>
    </div>

    <div class="mb-4">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Contraseña</legend>
        <input type="text" class="input" placeholder="" />
      </fieldset>
    </div>

    <div class="mb-4 flex items-center">
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <legend class="fieldset-legend">Opciones de Inicio</legend>
        <label class="label">
          <input type="checkbox" class="checkbox" />
          Recordar la sesion
        </label>
      </fieldset>
    </div>

    <div class="mb-6">
      <RouterLink class="link" to="recuperar"> ¿Olvidaste la contraseña? </RouterLink>
    </div>

    <button class="btn btn-block">Ingresar</button>
  </form>
</template>
