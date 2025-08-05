<template>
  <div class="border-4">
    hola
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
            <td>Aqui traduce de paso a paso</td>
            <td>
              <div class="badge badge-success">
                <ValidadoIcon />
                Validado
              </div>
            </td>
            <td>
              <RouterLink class="btn btn-xs" :to="`TraduccionDetalle`"> Traducir </RouterLink>
            </td>
          </tr>
          <tr class="hover:bg-base-300">
            <th>1</th>
            <td>E2</td>
            <td>Memorizado</td>
            <td>Aqui va a traducir y guardar lo que vaya terminando</td>
            <td>
              <div class="badge badge-warning">
                <ValidadoIcon />
                Construccion
              </div>
            </td>
            <td>
              <RouterLink class="btn btn-xs" :to="`NuevaEdicion`"> Traducir </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
