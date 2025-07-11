<script setup lang="ts">
import DeleteIcon from '@/modules/common/icon/deleteIcon.vue';
import EditIcon from '@/modules/common/icon/editIcon.vue';
</script>

<template class="">
  <div class="card bg-base-200 card-sm shadow-sm">
    <div class="card-body">
      <h2 class="card-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis tempora,
        obcaecati quod laborum impedit nobis dolorum laboriosam distinctio nulla veritatis doloribus
        explicabo aspernatur quasi atque repudiandae veniam alias eos.
      </h2>
      <!-- <p>
        A card component has a figure, a body part, and inside body there are title and actions
        parts
      </p> -->
      <div class="justify-end card-actions">
        <button class="btn btn-circle btn-sm">
          <EditIcon />
        </button>
        <button class="btn btn-circle btn-sm">
          <DeleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>
