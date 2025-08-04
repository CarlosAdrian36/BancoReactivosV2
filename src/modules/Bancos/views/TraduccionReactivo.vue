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
              <RouterLink class="btn btn-xs" :to="`TraduccionDetalle`"> Traducir </RouterLink>
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
              <RouterLink class="btn btn-xs" :to="`NuevaEdicion`"> Traducir </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
