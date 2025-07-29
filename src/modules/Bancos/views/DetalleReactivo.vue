<template>
  <div class="h-full flex flex-col md:flex-row flex-grow overflow-hidden">
    <div class="flex flex-row flex-grow overflow-hidden">
      <!-- Columna izquierda -->
      <div class="md:w-2/3 w-full p-5 overflow-auto">
        <div class="text-6xl flex justify-center">
          <p>Reactivo #2</p>
        </div>
        <div class="card bg-base-100 shadow-xl/30">
          <div class="card-body">
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
                2.- A card component has a figure, a body part, and inside body there are title and
                actions parts Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis inventore nulla
                qui deleniti voluptas suscipit magnam, corrupti unde, laborum consequatur sunt animi
                consectetur rem. Omnis magnam iure nostrum unde.
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

      <div class="divider divider-horizontal hidden md:block"></div>

      <!-- Columna derecha (chat) -->
      <div class="md:flex-1 w-full p-5 flex">
        <div class="card bg-base-100 shadow-xl/30 flex flex-col flex-grow">
          <div class="card-body flex flex-col flex-grow overflow-hidden">
            <h2 class="card-title justify-center">Comentarios</h2>
            <div class="divider"></div>

            <!-- Mensajes del chat con scroll interno -->

            <div class="flex-1 overflow-y-auto mb-4 max-h-80">
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">Obi-Wan Kenobi</div>
                <div class="chat-bubble">You were my brother, Anakin.</div>
              </div>
            </div>

            <!-- Input del chat abajo -->
            <div class="mt-auto">
              <div
                class="flex items-center rounded-full px-4 py-2 bg-base-200 text-base-content shadow border border-black focus-within:border-blue-500 transition"
              >
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  class="flex-1 outline-none px-2 bg-base-200 text-base-content placeholder-base-content/60 text-sm"
                />
                <button class="hover:scale-110 transition">
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SendIcon from '@/modules/common/icon/sendIcon.vue';
</script>
