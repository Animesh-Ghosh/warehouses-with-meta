<template>
  <section>
    <div>
      <label for="warehouse-name">Search Warehouses by Name:</label>
      <input v-model="value.warehouseName"
        @input="$emit('input', value)"
        id="warehouse-name"
        type="text"
        name="warehouse-name"/>
      <button @click="value.warehouseName = ''">Clear Name</button>
    </div>
    <WarehouseCitiesDropdown v-model="value.selectedCity"
      label="Filter Warehouses by City">
      <button @click="selectedCity = ''">Clear City</button>
    </WarehouseCitiesDropdown>
    <WarehouseClustersDropdown v-model="value.selectedCluster"
      label="Filter Warehouses by Cluster">
      <button @click="selectedCluster = ''">Clear Cluster</button>
    </WarehouseClustersDropdown>
    <div>
      <label for="min-warehouse-space-limit">Min Space:</label>
      <input v-model.number="value.minSpaceLimit"
        id="min-warehouse-space-limit"
        type="number"
        name="min-warehouse-space-limit"/>
      <label for="max-warehouse-space-limit">Max Space:</label>
      <input v-model.number="value.maxSpaceLimit"
        id="max-warehouse-space-limit"
        type="number"
        name="max-warehouse-space-limit"/>
      <button @click="(() => {
          value.minSpaceLimit = 0
          value.maxSpaceLimit = Infinity
        })">Clear Space Limits</button>
    </div>
    <div>
      <label for="warehouse-is-live">Filter by Status:</label>
      <select v-model="value.isLive">
        <option value="" disabled="">Is Live</option>
        <option :value="true">Yes</option>
        <option :value="false">No</option>
      </select>
      <button @click="value.isLive = ''">Clear Status</button>
    </div>
  </section>
</template>

<script>
import WarehouseCitiesDropdown from '@/components/WarehouseCitiesDropdown.vue'
import WarehouseClustersDropdown from '@/components/WarehouseClustersDropdown.vue'

export default {
  name: 'WarehouseFilters',
  components: {
    WarehouseCitiesDropdown,
    WarehouseClustersDropdown,
  },
  props: {
    value: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>