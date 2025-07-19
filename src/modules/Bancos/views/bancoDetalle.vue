<template>
  <!-- Titulo y boton de crear -->
  <div class="bg-info-content min-h-60 relative text-base-content">
    <BreadCrumbs />

    <div class="text-base-content">
      <div class="card w-full card-md shadow-sm">
        <div class="card-body">
          <h3 class="card-title">
            Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y
            las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la
            costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su
            pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el
            que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos
            signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco
            ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum,
            decidió aventurarse y salir al vasto mundo de la gramática. El gran Oxmox le
            desanconsejó hacerlo, ya que esas tierras estaban llenas de comas malvadas, signos de
            interrogación salvajes y puntos y coma traicioneros, pero el texto simulado no se dejó
            atemorizar. Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en
            camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio
            media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia,
            el encabezamiento del pueblo Alfabeto y el subtítulo de su
          </h3>

          <p>
            Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y
            las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la
            costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su
            pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el
            que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos
            signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco
            ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum,
            decidió aventurarse y salir al vasto mundo de la gramática. El gran Oxmox le
            desanconsejó hacerlo, ya que esas tierras estaban llenas de comas malvadas, signos de
            interrogación salvajes y puntos y coma traicioneros, pero el texto simulado no se dejó
            atemorizar. Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en
            camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio
            media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia,
            el encabezamiento del pueblo Alfabeto y el subtítulo de su propia calle, la calle del
            renglón. Una pregunta retórica se le pasó por la mente y le puso melancólico, pero
            enseguida reemprendió su marcha. De nuevo en camino, se encontró con una copia. La copia
            advirtió al pequeño texto simulado de que en el lugar del que ella venía, la habían
            reescrito miles de veces y que todo lo que había quedado de su original era la palabra
            "y", así que más le valía al pequeño texto simulado volver a su país, donde estaría
            mucho más seguro. Pero nada de lo dicho por la copia pudo convencerlo, de manera que al
            cabo de poco tiempo, unos pérfidos redactores publicitarios lo encontraron y
            emborracharon con Longe y Parole para llevárselo después a su agencia, donde abusaron de
            él para sus proyectos, una y otra vez. Y si aún no lo han reescrito, lo siguen
            utilizando hasta ahora.Muy lejos, más allá de las montañas de palabras, alejados de los
            países de las vocales y las consonantes, viven los textos simulados. Viven aislados en
            casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo
            llamado Pons fluye por su pueblo y los abastece con las normas
          </p>
          <div class="mt-6 items-center text-center">
            <button class="btn btn-primary">Agregar Reactivo al banco</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="underline underline-offset-4">Etapa + Nivel Cognitivo + Clasificación. ????</p>

  <div class="">
    <table class="table">
      <!-- head -->
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
        <!-- row 1 -->
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
            <RouterLink class="btn btn-xs" :to="`/t`"> Detalles </RouterLink>
          </td>
        </tr>
        <!-- <th></th>
        <td>E3</td>
        <td>Memorizado</td>
        <th>1</th>
        <td>
          <div class="break-words">Este es un Reactivo 1</div>
        </td>
        <td>
          <div class="badge badge-success">
            <ValidadoIcon/>
            Validado
          </div>
        </td>
        <th>
          <button class="btn btn-xs">
            <RouterLink :to="`/t`"> Detalles </RouterLink>
          </button>
        </th> -->
      </tbody>
    </table>
  </div>

  <!-- Modal con titulo y descripcion -->
  <InputModal
    placeholder="Ingrese el Nuevo reactivo"
    Titulo="Nuevo Banco"
    descripcion=""
    :open="modalOpen"
    @close="modalOpen = false"
  />
  <!-- @value="bancosStore.addBanco" -->

  <FabButton @click="modalOpen = true">
    <AddIcon />
  </FabButton>
</template>
<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import FabButton from '@/modules/common/components/fabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddIcon from '@/modules/common/icon/addIcon.vue';
import ValidadoIcon from '@/modules/common/icon/validadoIcon.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const modalOpen = ref(false);
</script>
