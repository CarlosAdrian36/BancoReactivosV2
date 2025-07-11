<template>
  <div class="w-full">
    <h1 class="text-2xl font-semibold mb-4">Restaurar contraseña</h1>
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
          <legend class="fieldset-legend">Correo Electronico</legend>
          <input type="text" class="input" placeholder="" />
          <!-- <p class="label">Optional</p> -->
        </fieldset>
      </div>

      <!-- Forgot Password Link -->
      <div class="mb-6">
        <RouterLink class="link" to="login"> Login </RouterLink>
        <!-- <a href="#" class="link">Olvidaste la contraseña?</a> -->
      </div>
      <!-- Login Button -->
      <button class="btn btn-block">Enviar Solicitud</button>
    </form>
  </div>
</template>
