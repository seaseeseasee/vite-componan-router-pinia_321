<template>
  <div>
    <!-- card -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(item, index) in menu_food_all" :key="index">
        <div class="card h-100">
          <img :src="item.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ item.name }}</strong></h5>
            <button class="btn btn-primary" @click="showDetails(index)">รายละเอียดเพิ่มเติม</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { menuStore } from '../stores/menu.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const menu_store = menuStore();
const menu_food_all = ref(menu_store.menu_list)

const showDetails = (itemIndex) => {
  // รีไดเรกไปที่เส้นทาง 'all_manu' และส่งดัชนีของรายการเป็นพารามิเตอร์แบบคิวรี
  router.push({ name: 'all_manu', query: { itemIndex } });
}
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Add any additional CSS styles here */

</style>