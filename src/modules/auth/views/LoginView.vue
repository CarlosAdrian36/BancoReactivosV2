<template>
  <div class="flex justify-between">
    <h1 class="text-2xl font-semibold mb-4 content-center">Inciar Sesion</h1>
    <img src="@/assets/login/uanl-logo-v-color.png" class="img w-10 z-10" />
  </div>
  <form @submit.prevent="">
    <!-- email Input -->
    <div class="mb-4">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Usuario</legend>
        <input type="text" class="input" placeholder="" />
        <!-- <p class="label">Optional</p> -->
      </fieldset>
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Contraseña</legend>
        <input type="text" class="input" placeholder="" />
        <!-- <p class="label">Optional</p> -->
      </fieldset>
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <legend class="fieldset-legend">Opciones de Inicio</legend>
        <label class="label">
          <input type="checkbox" class="checkbox" />
          Recordar la sesion
        </label>
      </fieldset>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6">
      <RouterLink class="link" to="recuperar"> ¿Olvidaste la contraseña? </RouterLink>
      <!-- <a href="#" class="link">Olvidaste la contraseña?</a> -->
    </div>
    <!-- Login Button -->
    <button class="btn btn-block">Ingresar</button>
  </form>
  <!-- Sign up  Link -->
</template>

<style>
.img {
  object-fit: contain;
}
</style>
