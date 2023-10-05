<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink :to="'/'">
        <a class="navbar-brand" href="#">FoodShop</a>
      </RouterLink>
      <div class="d-flex align-items-center">
        <RouterLink :to="'/cardView'" class="me-3">
          <i class="bi bi-bag-heart-fill" style="font-size: 1.5rem;"></i><span>[ {{ totalItems }} ]</span>
        </RouterLink>
        <RouterLink :to="'/or_derView'">
          <i class="bi bi-journal-bookmark-fill" style="font-size: 1.5rem;"></i>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {  computed } from 'vue';
import { cart } from '../stores/counter';


const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));
</script>
<style scoped>
.bi-bag-heart-fill{
  cursor: pointer;
}
.bi-journal-bookmark-fill{
  cursor: pointer;
}
</style>