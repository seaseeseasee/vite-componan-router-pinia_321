<template>
    <div>
      <Head_shop></Head_shop>
      <hr />
      <!-- card -->
      <div class="container">
        <div class="row">
          <div class="col mx-auto">
            <div class="card">
              <img :src="selectedItem.img" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ selectedItem.name }}</h5>
                <p class="card-text">{{ selectedItem.description }}</p>
                <p class="card-text"> price :{{ selectedItem.price }} บาท</p>
                <p class="card-text">Rating :{{ selectedItem.rating }}</p>
               
                <button class="btn btn-primary" type="button" @click="handleAddToCart(selectedItem)">กดเพื่อสั่งซื้อ</button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Head_shop from '../components/Head_shop.vue';
  import { menuStore } from '../stores/menu.js';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const menu_store = menuStore();
  const itemIndex = route.query.itemIndex;
  const selectedItem = ref(menu_store.menu_list[itemIndex]);
  
  const handleAddToCart = (item) => {
  menu_store.addToCart(item);
}

  </script>
  
  <style scoped>
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .container {
    text-align: center;
  }
  
  .row {
    width: 50%;
  }
  
  .col {
    text-align: center; /* Use text-align to center-align the content */
  }
  </style>
  