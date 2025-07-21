<template>
  <dialog class="modal" :open="open">
    <div class="modal-box h-[620px] max-h-[90vh] overflow-y-auto">
      <!-- Aqui van los tabs con contenido -->
      <div class="tabs tabs-lift">
        <label class="tab">
          <input type="radio" name="my_tabs_4" />
          <info-icon />
          Informacion
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <!-- aqui va los inputs -->
          <fieldset
            class="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4"
          >
            <legend class="fieldset-legend">Detalle Banco</legend>

            <label class="label">Nombre</label>
            <input type="text" class="input w-full" placeholder="Nombre del Banco" />

            <label class="label">Descripcion</label>
            <textarea class="textarea w-full max-w-[90vh] h-[256px]" placeholder="Bio"></textarea>
          </fieldset>
        </div>

        <label class="tab">
          <input type="radio" name="my_tabs_4" :checked="true" />
          <MembersIcon />
          Miembros
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <!--  -->
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Usuarios Disponibles -->
            <div class="flex-1 bg-base-200 rounded-box p-4 shadow">
              <h3 class="text-lg font-bold mb-2">Usuarios Disponibles</h3>
              <!-- Buscador -->
              <input
                type="text"
                v-model="searchAvailable"
                placeholder="Buscar usuario..."
                class="input input-bordered w-full mb-4"
              />
              <!-- Lista -->
              <ul class="space-y-2 max-h-80 overflow-y-auto">
                <li
                  v-for="user in filteredAvailableUsers"
                  :key="user.id"
                  class="flex justify-between items-center bg-base-100 rounded p-2"
                >
                  <span>{{ user.name }}</span>
                  <button class="btn btn-sm btn-primary" @click="assignUser(user)">➡️</button>
                </li>
                <li v-if="filteredAvailableUsers.length === 0" class="text-gray-500">
                  Sin usuarios disponibles
                </li>
              </ul>
            </div>

            <!-- Usuarios Asignados -->
            <div class="flex-1 bg-base-200 rounded-box p-4 shadow">
              <h3 class="text-lg font-bold mb-2">Usuarios Asignados</h3>
              <!-- Buscador -->
              <input
                type="text"
                v-model="searchAssigned"
                placeholder="Buscar usuario..."
                class="input input-bordered w-full mb-4"
              />
              <!-- Lista -->
              <ul class="space-y-2 max-h-80 overflow-y-auto">
                <li
                  v-for="user in filteredAssignedUsers"
                  :key="user.id"
                  class="flex justify-between items-center bg-base-100 rounded p-2"
                >
                  <span>{{ user.name }}</span>
                  <button class="btn btn-sm btn-error" @click="unassignUser(user)">⬅️</button>
                </li>
                <li v-if="filteredAssignedUsers.length === 0" class="text-gray-500">
                  Sin usuarios asignados
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
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
import { computed, ref } from 'vue';
import InfoIcon from '../icon/infoIcon.vue';
import MembersIcon from '../icon/membersIcon.vue';

interface Props {
  open: boolean;
}

defineProps<Props>();

// Interface de usuario
interface User {
  id: number;
  name: string;
}

// Datos de ejemplo (conéctalo a Pinia o TanStack Query después)
const availableUsers = ref<User[]>([
  { id: 1, name: 'Carlos Arroyo' },
  { id: 2, name: 'Ana Pérez' },
  { id: 3, name: 'Luis Gómez' },
]);

const assignedUsers = ref<User[]>([]);

// Buscadores
const searchAvailable = ref('');
const searchAssigned = ref('');

// Filtrados computados
const filteredAvailableUsers = computed(() =>
  availableUsers.value.filter((u) =>
    u.name.toLowerCase().includes(searchAvailable.value.toLowerCase()),
  ),
);

const filteredAssignedUsers = computed(() =>
  assignedUsers.value.filter((u) =>
    u.name.toLowerCase().includes(searchAssigned.value.toLowerCase()),
  ),
);

// Funciones de mover usuarios
const assignUser = (user: User) => {
  availableUsers.value = availableUsers.value.filter((u) => u.id !== user.id);
  assignedUsers.value.push(user);
};

const unassignUser = (user: User) => {
  assignedUsers.value = assignedUsers.value.filter((u) => u.id !== user.id);
  availableUsers.value.push(user);
};
</script>
