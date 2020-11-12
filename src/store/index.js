import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    warehouses: [],
    warehousesMetas: [],
  },
  mutations: {
    setWarehouses(state, newWarehouses) {
      state.warehouses = newWarehouses
    },
    setWarehousesMeta(state, newWarehousesMeta) {
      state.warehousesMetas = newWarehousesMeta
    }
  },
  actions: {
  },
  modules: {
  }
})
