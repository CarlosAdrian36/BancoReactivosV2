<template>
  <!-- Titulo y boton de crear -->
  <div class="ps-4">
    <BreadCrumbs />
  </div>

  <div class="flex justify-center p-4">
    <div class="card bg-base-300 shadow-lg w-full transition duration-300 ease-in-out">
      <div class="card-body">
        <div class="card-actions justify-end">
          <ul class="menu menu-horizontal bg-base-200 rounded-box mt-6">
            <li>
              <a class="tooltip" data-tip="Miembros de este banco">
                <MembersIcon />
              </a>
            </li>
            <li v-if="!isEditing">
              <a class="tooltip" data-tip="Editar" @click="startEditing">
                <EditIcon />
              </a>
            </li>
          </ul>
        </div>

        <!-- Título -->
        <div>
          <transition name="fade" mode="out-in">
            <h2 v-if="!isEditing" key="view-title" class="card-title">
              {{ title }}
            </h2>
            <fieldset v-else class="fieldset">
              <legend class="fieldset-legend">Nombre del Banco</legend>

              <input
                key="edit-title"
                v-model="editTitle"
                type="text"
                class="input input-bordered w-full mb-2"
                placeholder="Título del banco"
              />
            </fieldset>
          </transition>
        </div>

        <!-- Descripción -->
        <div>
          <transition name="fade" mode="out-in">
            <p v-if="!isEditing" key="view-description">{{ description }}</p>
            <fieldset v-else class="fieldset">
              <legend class="fieldset-legend">Descripcion del Banco</legend>
              <textarea
                key="edit-description"
                v-model="editDescription"
                class="textarea textarea-bordered w-full mb-2 h-24"
                placeholder="Descripción del banco"
                rows="5"
              ></textarea>
            </fieldset>
          </transition>
        </div>

        <!-- Botones Aceptar y Cancelar -->
        <transition name="fade">
          <div v-if="isEditing" class="card-actions justify-end">
            <button class="btn btn-ghost" @click="cancelEditing">Cancelar</button>
            <button class="btn btn-primary" @click="saveChanges">Aceptar</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <!-- ---------------------------------------------------- BOTON PARA AGREGAR REACTIVOS  --------------------------------------------------------- -->
  <div class="mt-6 items-center text-center">
    <button @click="opneReactivo = true" class="btn btn-dash">Argegar Reactivo</button>
  </div>
  <!-- ---------------------------------------------------- CREEACION DEL REACTIVO --------------------------------------------------------- -->

  <div class="p-4">
    <!-- Botón para mostrar la sección -->
    <button class="btn btn-primary" @click="openCreateSection">Crear Reactivo</button>

    <!-- Sección de creación -->
    <div v-if="showCreateSection" class="mt-4 card bg-base-200 p-4 shadow-sm max-w-xl">
      <h2 class="text-lg font-bold mb-4">Nuevo Reactivo</h2>

      <div class="mb-4">
        <label class="label">Tema</label>
        <select v-model="tema" class="select w-full">
          <option disabled value="">Selecciona un Tema</option>
          <option>Tema 1</option>
          <option>Tema 2</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="label">Subtema</label>
        <select v-model="subtema" class="select w-full">
          <option disabled value="">Selecciona un Subtema</option>
          <option>Subtema 1</option>
          <option>Subtema 2</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="label">Tipo de Reactivo</label>
        <select v-model="tipoReactivo" class="select w-full">
          <option disabled value="">Selecciona un Tipo de Reactivo</option>
          <option>Respuesta Múltiple</option>
          <option>Respuesta Abierta</option>
          <option>Relacional</option>
          <option>Verdadero/Falso</option>
        </select>
      </div>

      <!-- Inputs dinámicos -->
      <div v-if="tipoReactivo === 'Respuesta Múltiple'" class="mb-4">
        <label class="label">Opciones</label>
        <div v-for="(op, i) in opciones" :key="i" class="mb-2 flex gap-2">
          <input
            v-model="opciones[i]"
            type="text"
            class="input input-bordered w-full"
            placeholder="Opción"
          />
        </div>
        <button class="btn btn-sm btn-secondary" @click="addOpcion">Agregar opción</button>
      </div>

      <div v-if="tipoReactivo === 'Respuesta Abierta'" class="mb-4">
        <label class="label">Respuesta</label>
        <input
          v-model="respuestaAbierta"
          type="text"
          class="input input-bordered w-full"
          placeholder="Respuesta"
        />
      </div>

      <div v-if="tipoReactivo === 'Relacional'" class="mb-4">
        <label class="label">Relacional - Columna A</label>
        <div v-for="(item, i) in relacionalA" :key="i" class="mb-2">
          <input
            v-model="relacionalA[i]"
            type="text"
            class="input input-bordered w-full"
            placeholder="Columna A"
          />
        </div>
        <button class="btn btn-sm btn-secondary" @click="addRelacionalA">Agregar A</button>

        <label class="label mt-4">Relacional - Columna B</label>
        <div v-for="(item, i) in relacionalB" :key="i" class="mb-2">
          <input
            v-model="relacionalB[i]"
            type="text"
            class="input input-bordered w-full"
            placeholder="Columna B"
          />
        </div>
        <button class="btn btn-sm btn-secondary" @click="addRelacionalB">Agregar B</button>
      </div>

      <div v-if="tipoReactivo === 'Verdadero/Falso'" class="mb-4">
        <label class="label">Respuesta</label>
        <select v-model="verdaderoFalso" class="select w-full">
          <option disabled value="">Selecciona respuesta</option>
          <option>Verdadero</option>
          <option>Falso</option>
        </select>
      </div>

      <div class="flex justify-end gap-2">
        <button class="btn btn-ghost" @click="showCreateSection = false">Cancelar</button>
        <button class="btn btn-primary" @click="createReactivo">Crear</button>
      </div>
    </div>
  </div>

  <!-- ---------------------------------------------------- TABLA DE REACTIVOS --------------------------------------------------------- -->

  <div class="p-4">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Etapa</th>
          <th>Nivel Cognitivo</th>
          <th>Reactivo</th>
          <th>Estatus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-base-300">
          <th>1</th>
          <td>E2</td>
          <td>Memorizado</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi minus, nostrum
            vitae officiis distinctio tempore laborum ipsa, aliquid non similique esse unde
            perspiciatis veritatis labore voluptas eos veniam id?
          </td>
          <td>
            <div class="badge badge-success">
              <ValidadoIcon />
              Validado
            </div>
          </td>
          <td>
            <RouterLink class="btn btn-xs" :to="`DetaleReactivo`"> Detalles </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ----------------------------------------- Modal Dialog Reactivo------------------------------------------------ -->

  <ModalReactivo :open="opneReactivo" />
</template>
<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import EditIcon from '@/modules/common/icon/editIcon.vue';
import MembersIcon from '@/modules/common/icon/membersIcon.vue';
import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
import { RouterLink } from 'vue-router';
// import router from '../../../router/index';
import ModalReactivo from '@/modules/common/components/ModalReactivo.vue';

const opneReactivo = ref(false);

const isEditing = ref(false);

// Datos originales
const title = ref(
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
);
const description = ref(
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
);

// Copias temporales para edición
const editTitle = ref('');
const editDescription = ref('');

// Activar modo edición cargando los valores actuales
const startEditing = () => {
  editTitle.value = title.value;
  editDescription.value = description.value;
  isEditing.value = true;
};

// Guardar cambios
const saveChanges = () => {
  // Validación simple
  if (!editTitle.value.trim() || !editDescription.value.trim()) {
    alert('Por favor completa todos los campos.');
    return;
  }

  title.value = editTitle.value;
  description.value = editDescription.value;
  isEditing.value = false;

  // Aquí puedes hacer el update en Pinia o TanStack Query
};

// Cancelar edición
const cancelEditing = () => {
  isEditing.value = false;
};

// -------------------------------------------------Creacion de Reactivo---------------------------------------------------------------------------
import { ref } from 'vue';
interface DatosReactivo {
  tema: string;
  subtema: string;
  tipo: string;
  opciones?: string[];
  respuesta?: string;
  columnaA?: string[];
  columnaB?: string[];
}

// Estado para mostrar la sección
const showCreateSection = ref(false);

// Datos de formulario
const tema = ref('');
const subtema = ref('');
const tipoReactivo = ref('');

// Campos dinámicos para tipos de reactivo
const opciones = ref<string[]>(['']);
const respuestaAbierta = ref('');
const relacionalA = ref<string[]>(['']);
const relacionalB = ref<string[]>(['']);
const verdaderoFalso = ref('');

// Funciones
const openCreateSection = () => {
  showCreateSection.value = true;
};

const addOpcion = () => {
  opciones.value.push('');
};

const addRelacionalA = () => {
  relacionalA.value.push('');
};

const addRelacionalB = () => {
  relacionalB.value.push('');
};

const createReactivo = () => {
  if (!tema.value || !subtema.value || !tipoReactivo.value) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Construir el objeto según tipo de reactivo
  const datos: DatosReactivo = {
    tema: tema.value,
    subtema: subtema.value,
    tipo: tipoReactivo.value,
  };

  if (tipoReactivo.value === 'Respuesta Múltiple') {
    datos.opciones = opciones.value;
  } else if (tipoReactivo.value === 'Respuesta Abierta') {
    datos.respuesta = respuestaAbierta.value;
  } else if (tipoReactivo.value === 'Relacional') {
    datos.columnaA = relacionalA.value;
    datos.columnaB = relacionalB.value;
  } else if (tipoReactivo.value === 'Verdadero/Falso') {
    datos.respuesta = verdaderoFalso.value;
  }

  // Aquí haces la petición al backend
  console.log('Reactivo creado:', datos);

  // Resetear formulario
  tema.value = '';
  subtema.value = '';
  tipoReactivo.value = '';
  opciones.value = [''];
  respuestaAbierta.value = '';
  relacionalA.value = [''];
  relacionalB.value = [''];
  verdaderoFalso.value = '';
  showCreateSection.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
