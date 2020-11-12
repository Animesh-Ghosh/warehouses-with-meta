<template>
  <div>
    <input v-model="warehouseName" type="text" name="warehouse-name">
    <ul>
      <li v-for="warehouse of warehousesFilteredByName"
      :key="warehouse.id"
      >
        <router-link :to="{ name: 'WarehouseDetail', params: { 'id': warehouse.id } }">
          <Warehouse :warehouse="warehouse"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Warehouse from '@/components/Warehouse.vue'

export default {
  name: 'WarehousesListing',
  components: {
    Warehouse
  },
  data () {
    return {
      'warehouses': this.$store.state.warehouses,
      'warehouseName': ''
    }
  },
  computed: {
    warehousesFilteredByName() {
      return this.warehouseName ? this.warehouses.filter(warehouse => warehouse.name.toLowerCase().includes(this.warehouseName.toLowerCase())) : this.warehouses
    }
  }
}
</script>

<style lang="css" scoped>
</style>
