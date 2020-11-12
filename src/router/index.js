import Vue from 'vue'
import VueRouter from 'vue-router'
import WarehousesListing from '@/views/WarehousesListing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WarehousesListing',
    component: WarehousesListing
  },
  {
    path: '/warehouse/:id',
    name: 'WarehouseDetail',
    component: () => import(/* webpackChunkName: "warehouse-detail" */ '@/views/WarehouseDetail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
