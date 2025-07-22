<template>
  <!-- Titulo y boton de crear -->
  <div class="ps-4">
    <BreadCrumbs />
  </div>
  <div class="flex justify-center p-4">
    <div class="card bg-base-300 shadow-sm">
      <div class="card-body">
        <div class="card-actions justify-end">
          <button class="btn btn-square btn-sm">
            <MembersIcon @click="modalOpen = true" />
          </button>
          <button class="btn btn-square btn-sm">
            <EditIcon />
          </button>
        </div>
        <h2 class="card-title">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
    </div>
  </div>
  <!-- ----------------------------------------------------TABLA DE REACTIVOS--------------------------------------------------------- -->
  <div class="mt-6 items-center text-center">
    <button class="btn btn-dash btn-primary">Argegar Reactivo</button>
  </div>

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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
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
            <RouterLink class="btn btn-xs" :to="``"> Detalles </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ----------------------------------------- Modal Dialog Nuevo------------------------------------------------ -->
  <ModalCustom :open="modalOpen" />
</template>
<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import ModalCustom from '@/modules/common/components/ModalCustom.vue';
import ConfigIcon from '@/modules/common/icon/configIcon.vue';
import EditIcon from '@/modules/common/icon/editIcon.vue';
import MembersIcon from '@/modules/common/icon/membersIcon.vue';
import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const modalOpen = ref(false);
</script>
