<template>
  <div class="warehouses-listing">
    <h1>Warehouses Listing</h1>
    <WarehouseFilters v-model="warehouseFilters"/>
    <WarehousesTable :warehouses="warehouses"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WarehouseFilters from '@/components/WarehouseFilters.vue'
import WarehousesTable from '@/components/WarehousesTable.vue'

export default {
  name: 'WarehousesListing',
  components: {
    WarehouseFilters,
    WarehousesTable,
  },
  data () {
    return {
      warehouseFilters: {
        warehouseName: '',
        selectedCity: '',
        selectedCluster: '',
        minSpaceLimit: 0,
        maxSpaceLimit: Infinity,
        isLive: '',
      },
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      warehouses(state) {
        let warehouses = state.warehouses

        // filter by search text
        warehouses = this.warehouseFilters.warehouseName ? warehouses.filter(warehouse => warehouse.name.toLowerCase().includes(this.warehouseFilters.warehouseName.toLowerCase())) : warehouses

        // filter by city
        warehouses = this.warehouseFilters.selectedCity ? warehouses.filter(warehouse => warehouse.city == this.warehouseFilters.selectedCity) : warehouses

        // filter by cluster
        warehouses = this.warehouseFilters.selectedCluster ? warehouses.filter(warehouse => warehouse.cluster == this.warehouseFilters.selectedCluster) : warehouses

        // filter by space limit
        warehouses = warehouses.filter(warehouse => this.warehouseFilters.minSpaceLimit <= warehouse.space_available)
        warehouses = warehouses.filter(warehouse => warehouse.space_available <= this.warehouseFilters.maxSpaceLimit)

        // filter by status
        if (typeof this.warehouseFilters.isLive == 'boolean')
          warehouses = warehouses.filter(warehouse => this.warehouseFilters.isLive == warehouse.is_live)

        return warehouses
      }
    }),
  }
}
</script>

<style lang="scss" scoped>
</style>
