<script setup>
import { ref } from 'vue'
import { menuStore } from '../stores/menu.js'

const menu_store = menuStore();
const menu_food_all = ref(menu_store.menu_list)
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> <hr>
<!-- card  -->
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(i, index) in menu_food_all" :key="index">
      <div class="card h-100">
        <img :src="i.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><strong>{{ i.name }}</strong></h5>
          <p class="card-text"> {{i.description}}</p>
          <p class="card-text"> ราคา : {{i.price}} บาท</p>
        </div>
        <button class="btn btn-primary" type="submit">เข้าตะกร้า</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-img-top {
  width: 100%;      
  height: 200px;    
  object-fit: cover; 
}
</style>