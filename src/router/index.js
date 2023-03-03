import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'catalog',
    component: () => import("../components/v-catalog.vue")
    // component: vCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("../components/v-cart.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
