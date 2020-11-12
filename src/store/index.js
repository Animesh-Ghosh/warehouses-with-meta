import Vue from 'vue'
import Vuex from 'vuex'

import { INIT_WAREHOUSES, EDIT_WAREHOUSE } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    warehouses: new Array(),
    warehousesMetas: new Array(),
  },
  mutations: {
    [INIT_WAREHOUSES](state, initialWarehouses) {
      state.warehouses = initialWarehouses
    },
    [EDIT_WAREHOUSE](state, { warehouseId, newWarehouseData }) {
      let warehouse = state.warehouses.find(warehouse => warehouse.id == warehouseId)
      for (const key in newWarehouseData) {
        warehouse[key] = newWarehouseData[key]
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
