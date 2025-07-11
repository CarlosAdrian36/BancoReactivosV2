<template>
  <div class="bg-neutral-content flex h-screen">
    <!-- Left: Image -->
    <div class="hidden lg:block w-1/2 h-screen">
      <img src="@/assets/login/cuadro.png" class="w-full h-full object-cover z-10" />
    </div>

    <!-- Right: Login Form -->
    <div class="flex items-center justify-center w-full lg:w-1/2 h-screen bg-base-300 p-8">
      <RouterView />
    </div>
  </div>
</template>
