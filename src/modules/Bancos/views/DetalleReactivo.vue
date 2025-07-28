<script setup lang="ts">
import SendIcon from '@/modules/common/icon/sendIcon.vue';
</script>

<template>
  <div class="flex flex-row border-2">
    <!-- Columna para Reactivo y Respuesta -->
    <div class="flex-3/12 p-5">
      <div class="card bg-base-100 shadow-xl/30">
        <div class="card-body">
          <!-- Aqio van los Badge -->
          <div class="flex flex-row gap-3">
            <select
              class="select select-ghost select-sm bg-info text-success-content rounded-[8vw] w-auto"
            >
              <option disabled selected>Etapa</option>
              <option>Inter</option>
              <option>Poppins</option>
              <option>Raleway</option>
            </select>

            <select
              class="select select-ghost select-sm bg-info text-success-content rounded-[8vw] w-auto"
            >
              <option disabled selected>NivelCognitivo</option>
              <option>Inter</option>
              <option>Poppins</option>
              <option>Raleway</option>
            </select>
          </div>
          <div class="flex justify-between">
            <p>
              <!-- aqui va el reactivo -->
              A card component has a figure, a body part, and inside body there are title and
              actions parts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
              commodi ad iure veritatis enim labore vitae maxime animi, a temporibus. Repellendus
              explicabo fuga voluptatem exercitationem modi cum, iusto harum error!
            </p>
            <select
              class="select select-ghost select-sm bg-success text-success-content rounded-[8vw] w-auto"
            >
              <option disabled selected>Estatus</option>
              <option>Validado</option>
              <option>Correccion</option>
              <option>Nuevo</option>
            </select>
          </div>
          <ul class="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
          </ul>
          <div class="mt-6">
            <button class="btn btn-primary btn-block">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Divider -->
    <div class="divider divider-horizontal"></div>
    <!-- Observaciones y comentarios  -->
    <div class="flex-1 p-5 items-end">
      <!-- Aqui esta el chat -->
      <div class="card bg-base-100 card-md min-h-[450px] shadow-xl/30">
        <div class="card-body">
          <h2 class="card-title justify-center">Comentarios</h2>
          <div class="divider"></div>

          <div class="chat chat-end">
            <div class="chat-header">Obi-Wan Kenobi</div>
            <div class="chat-bubble">I loved you.</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-header">Obi-Wan Kenobi</div>
            <div class="chat-bubble">I loved you.</div>
          </div>

          <div class="">
            <div
              class="flex items-center rounded-full px-4 py-2 mx-auto bg-base-200 text-base-content shadow border border-black focus-within:border-blue-500 transition"
            >
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                class="flex-1 outline-none px-2 bg-base-200 text-base-content placeholder-base-content/60 text-sm"
              />
              <!-- Icono de enviar (Heroicons) -->
              <button class="hover:scale-110 transition">
                <send-icon />
              </button>
            </div>
          </div>
          se tiene que hacer lo mas alto posible pero que no se rompa la web
        </div>
      </div>
    </div>
  </div>
</template>
