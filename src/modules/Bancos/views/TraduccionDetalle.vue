<template>
  <div class="p-65hc766">
    <!-- Steps -->
    <ul class="steps w-full pt-16">
      <li class="step" :class="{ 'step-primary': pasoActual >= 0 }">Traduccion Reactivo</li>
      <li class="step" :class="{ 'step-primary': pasoActual >= 1 }">Traduccion Respuestas</li>
      <li class="step" :class="{ 'step-primary': pasoActual >= 2 }">Confirmación de Traduccion</li>
    </ul>

    <!-- Contenido por paso -->
    <div v-if="pasoActual === 0">
      <div class="p-8">
        <!-- Pregunta Original -->
        <div class="">
          <div class="card card-border bg-base-200">
            <div class="card-body">
              <h2 class="card-title">Reactivo</h2>
              <div class="flex justify-center">
                A card component has a figure, a body part, and inside body there are title and
                actions Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed unde
                iste consectetur odio eveniet inventore deserunt cumque ex eius. Ratione, architecto
                minima. Earum quod illum cum quis, dolor temporibus? Earum quod illum cum quis,
                dolor temporibus? A card component has a figure, a body part, and inside body there
                are title and actions Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quasi sed unde iste consectetur odio eveniet inventore deserunt cumque ex eius.
                Ratione, architecto minima. Earum quod illum cum quis, dolor temporibus? Earum quod
                illum cum quis, dolor temporibus? A card component has a figure, a body part, and
                inside body there are title and actions Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quasi sed unde iste consectetur odio eveniet inventore deserunt
                cumque ex eius. Ratione, architecto minima. Earum quod illum cum quis, dolor
                temporibus? Earum quod illum cum quis, dolor temporibus? A card component has a
                figure, a body part, and inside body there are title and actions Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Quasi sed unde iste consectetur odio eveniet
                inventore deserunt cumque ex eius. Ratione, architecto minima. Earum quod illum cum
                quis, dolor temporibus? Earum quod illum cum quis, dolor temporibus? A card
                component has a figure, a body part, and inside body there are title and actions
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed unde iste
                consectetur odio eveniet inventore deserunt cumque ex eius. Ratione, architecto
                minima. Earum quod illum cum quis, dolor temporibus? Earum quod illum cum quis,
                dolor temporibus? A card component has a figure, a body part, and inside body there
                are title and actions Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quasi sed unde iste consectetur odio eveniet inventore deserunt cumque ex eius.
                Ratione, architecto minima. Earum quod illum cum quis, dolor temporibus? Earum quod
                illum cum quis, dolor temporibus? A card component has a figure, a body part, and
                inside body there are title and actions Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quasi sed unde iste consectetur odio eveniet inventore deserunt
                cumque ex eius. Ratione, architecto minima. Earum quod illum cum quis, dolor
                temporibus? Earum quod illum cum quis, dolor temporibus? A card component has a
                figure, a body part, and inside body there are title and actions Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Quasi sed unde iste consectetur odio eveniet
                inventore deserunt cumque ex eius. Ratione, architecto minima. Earum quod illum cum
                quis, dolor temporibus? Earum quod illum cum quis, dolor temporibus? A card
                component has a figure, a body part, and inside body there are title and actions
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed unde iste
                consectetur odio eveniet inventore deserunt cumque ex eius. Ratione, architecto
                minima. Earum quod illum cum quis, dolor temporibus? Earum quod illum cum quis,
                dolor temporibus? A card component has a figure, a body part, and inside body there
                are title and actions Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quasi sed unde iste consectetur odio eveniet inventore deserunt cumque ex eius.
                Ratione, architecto minima. Earum quod illum cum quis, dolor temporibus? Earum quod
                illum cum quis, dolor temporibus? A card component has a figure, a body part, and
                inside body there are title and actions Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quasi sed unde iste consectetur odio eveniet inventore deserunt
                cumque ex eius. Ratione, architecto minima. Earum quod illum cum quis, dolor
                temporibus? Earum quod illum cum quis, dolor temporibus?
              </div>
            </div>
          </div>
        </div>
        <!-- Tabs -->
        <div class="p-4">
          <div class="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="Ingles" />
            <div class="tab-content bg-base-100 border-base-300 p-6">
              <textarea class="textarea w-full" placeholder="Bio"></textarea>
            </div>

            <input type="radio" name="my_tabs_3" class="tab" aria-label="Frances" checked="true" />
            <div class="tab-content bg-base-100 border-base-300 p-6">
              <textarea class="textarea w-full" placeholder="Bio"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="pasoActual === 1">
      <div class="p-8">
        <div class="card card-border bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Respuestas</h2>
            <div class="flex justify-center">
              A.-
              csdcsdCSCsdcvijdsoivkjetlokvjldkjvlkdfjvlkjdlvkjdlkvjlkdfjvlkdfjvlkjdflkvjlkdfjvlkdfjv
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officiis incidunt
              minima totam facere obcaecati rem omnis delectus reiciendis, enim non eos vero atque
              saepe accusamus hic earum eveniet adipisci?? B) kwejrhfkljaefvc;lkaerhjv;kjwerhjve
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea quaerat possimus
              placeat consequuntur in porro itaque, quas voluptate deleniti nam expedita alias nobis
              sed voluptatibus tempore minus ab ratione.
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="Ingles" />
            <div class="tab-content bg-base-100 border-base-300 p-6">
              <textarea class="textarea w-full" placeholder="Bio"></textarea>
            </div>

            <input type="radio" name="my_tabs_3" class="tab" aria-label="Frances" checked="true" />
            <div class="tab-content bg-base-100 border-base-300 p-6">
              <textarea class="textarea w-full" placeholder="Bio"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="pasoActual === 2">
      <div class="p-8">
        <div class="card card-border bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Reactivo Traducido</h2>
            <div class="flex justify-center">
              A card component has a figure, a body part, and inside body there are title and
              actions Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed unde iste
              consectetur odio eveniet inventore deserunt cumque ex eius. Ratione, architecto
              minima. Earum quod illum cum quis, dolor temporibus? Earum quod illum cum quis, dolor
              temporibus? A card component has a figure, a body part, and inside body there are
              title and actions Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
              unde iste consectetur odio eveniet inventore deserunt cumque ex eius. Ratione,
              architecto minima. Earum quod illum cum quis, dolor temporibus? Earum quod illum cum
              quis, dolor temporibus? A card component has a figure, a body part, and inside body
              there are title and actions Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quasi sed unde iste consectetur odio eveniet inventore deserunt cumque ex eius.
              Ratione, architecto minima. Earum quod illum cum quis, dolor temporibus? Earum quod
              illum cum quis, dolor temporibus? A card component has a figure, a body part, and
              inside body there are title and actions Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quasi sed unde iste consectetur odio eveniet inventore deserunt
              cumque ex eius. Ratione, architecto minima. Earum quod illum cum quis, dolor
              temporibus? Earum quod illum cum quis, dolor temporibus? A card component has a
              figure, a body part, and inside body there are title and actions Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Quasi sed unde iste consectetur odio eveniet
              inventore deserunt cumque ex eius. Ratione, architecto minima. Earum quod illum cum
            </div>
          </div>
        </div>
        <div class="card card-border bg-base-200">
          <div class="card-body">A)jksdhdfglkjdshfglkjsdhflkjghlksdjffhglkjsdfhlgkjhdsflkjhglk</div>
        </div>
        <div class="card card-border bg-base-200">
          <div class="card-body">A)jksdhdfglkjdshfglkjsdhflkjghlksdjffhglkjsdfhlgkjhdsflkjhglk</div>
        </div>
        <div class="card card-border bg-base-200">
          <div class="card-body">A)jksdhdfglkjdshfglkjsdhflkjghlksdjffhglkjsdfhlgkjhdsflkjhglk</div>
        </div>
        <div class="card card-border bg-base-200">
          <div class="card-body">A)jksdhdfglkjdshfglkjsdhflkjghlksdjffhglkjsdfhlgkjhdsflkjhglk</div>
        </div>
      </div>
    </div>

    <!-- Botones -->
    <div class="flex justify-between">
      <button class="btn btn-outline" :disabled="pasoActual === 0" @click="pasoActual--">
        Anterior
      </button>

      <button class="btn btn-primary" @click="siguientePaso">
        {{ pasoActual === pasosTotales - 1 ? 'Enviar' : 'Siguiente' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const pasoActual = ref(0);
const pasosTotales = 3;

function siguientePaso() {
  if (pasoActual.value < pasosTotales - 1) {
    pasoActual.value++;
  } else {
    alert('Formulario enviado ✅');
    // Aquí podrías hacer algo como guardar datos o redirigir
  }
}
</script>
