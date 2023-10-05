import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import all_manu from '../components/all_manu.vue'
import Head_shop from '../components/Head_shop.vue'
import cardView from '../components/cardView.vue'
import or_derView from '../components/or_derView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/all_manu',
      name: 'all_manu',
      component: all_manu
    },
    {
      path: '/Head_shop',
      name: 'Head_shop',
      component: Head_shop
    },
    {
      path: '/cardView',
      name: 'cardView',
      component: cardView
    }
    ,
    {
      path: '/or_derView',
      name: 'or_derView',
      component: or_derView
    }
  ]
})

export default router
