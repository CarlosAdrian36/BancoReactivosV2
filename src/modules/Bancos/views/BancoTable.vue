<template>
  <div class="parent">
    <div class="div1">
      <div class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt laudantium
          dolorum soluta sunt tempora pariatur, inventore saepe blanditiis optio rerum quis impedit
          quia mollitia obcaecati iusto aliquid beatae reiciendis?
        </div>
      </div>
    </div>
    <div class="div3">
      <div class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt laudantium
          dolorum soluta sunt tempora pariatur, inventore saepe blanditiis optio rerum quis impedit
          quia mollitia obcaecati iusto aliquid beatae reiciendis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Beatae fuga nostrum unde voluptatibus, impedit
          exercitationem iure, reprehenderit architecto pariatur commodi necessitatibus consequatur
          quod eveniet perferendis modi. Eum iusto dignissimos architecto. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Repellat enim totam possimus tempore! Illo totam,
          blanditiis facere eius eveniet voluptatem. Temporibus, recusandae. Vel, est ipsum soluta
          rerum laborum aliquam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          sit exercitationem porro illo recusandae ut sint vero cumque hic, iusto aut mollitia nulla
          eaque, animi quidem optio illum nemo quod!lorem
        </div>
      </div>
    </div>
    <div class="div4">
      <div class="card bg-base-100 w-96 shadow-xs">
        <div class="card-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt laudantium
          dolorum soluta sunt tempora pariatur, inventore saepe blanditiis optio rerum quis impedit
          quia mollitia obcaecati iusto aliquid beatae reiciendis?asdadasdasdasdas asdasdasds Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eos eaque aspernatur modi nisi
          architecto, corrupti voluptate voluptatum commodi quisquam debitis a consequuntur adipisci
          voluptas. Earum autem optio at beatae corporis.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 9px;
}

.div1 {
  grid-column: span 2 / span 2;
}

.div3 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
}

.div4 {
  grid-column: span 2 / span 2;
  grid-row-start: 2;
}
</style>
