import Vue from 'vue'
import Vuex from 'vuex'

import { INIT_WAREHOUSES, EDIT_WAREHOUSE, SET_WAREHOUSE_META } from './mutation-types'

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
    [SET_WAREHOUSE_META](state, { warehouseId, warehouseMeta }) {
      state.warehousesMetas.push({
        id: state.warehousesMetas.length + 1,
        warehouseId,
        key: warehouseMeta.key,
        value: warehouseMeta.value,
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
