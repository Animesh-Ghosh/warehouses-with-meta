<template>
  <div class="warehouses-listing">
    <h1>Warehouses Listing</h1>
    <div>
      <label for="warehouse-name">Search Warehouses by Name:</label>
      <input v-model="warehouseName"
        id="warehouse-name"
        type="text"
        name="warehouse-name"/>
      <button @click="warehouseName = ''">Clear Name</button>
    </div>
    <div>
      <label for="warehouse-city">Filter Warehouses by City:</label>
      <select v-model="selectedCity"
        id="warehouse-city"
        name="warehouse-city">
        <option v-for="city of warehouseCities"
          :key="city.value"
          :value="city.value"
          :disabled="city.disabled">
          {{ city.label }}
        </option>
      </select>
      <button @click="selectedCity = ''">Clear City</button>
    </div>
    <div>
      <label for="warehouse-cluster">Filter Warehouses by Cluster:</label>
      <select v-model="selectedCluster"
        id="warehouse-cluster"
        name="warehouse-cluster">
        <option v-for="cluster of warehouseClusters"
          :key="cluster.value"
          :value="cluster.value"
          :disabled="cluster.disabled">
          {{ cluster.label }}
        </option>
      </select>
      <button @click="selectedCluster = ''">Clear Cluster</button>
    </div>
    <div>
      <label for="min-warehouse-space-limit">Min Space:</label>
      <input v-model.number="minSpaceLimit"
        id="min-warehouse-space-limit"
        type="number"
        name="min-warehouse-space-limit"/>
      <label for="max-warehouse-space-limit">Max Space:</label>
      <input v-model.number="maxSpaceLimit"
        id="max-warehouse-space-limit"
        type="number"
        name="max-warehouse-space-limit"/>
      <button @click="minSpaceLimit = maxSpaceLimit = ''">Clear Space Limits</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>City</th>
          <th>Cluster</th>
          <th>Space Available</th>
          <th>Live</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="warehouse of warehouses"
          :key="warehouse.id">
          <td>{{ warehouse.code }}</td>
          <td>{{ warehouse.name }}</td>
          <td>{{ warehouse.city }}</td>
          <td>{{ warehouse.cluster }}</td>
          <td>{{ warehouse.space_available }}</td>
          <td>{{ warehouse.is_live ? 'Yes' : 'No' }}</td>
          <td>
            <router-link :to="{ name: 'WarehouseDetail', params: { id: warehouse.id } }">
              Go to details &rarr;
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cities, clusters } from '@/App.vue'

export default {
  name: 'WarehousesListing',
  components: {
  },
  data () {
    return {
      warehouseName: '',
      warehouseCities: cities,
      warehouseClusters: clusters,
      selectedCity: '',
      selectedCluster: '',
      minSpaceLimit: '',
      maxSpaceLimit: '',
    }
  },
  created() {
    // set filter initial value
    this.selectedWarehouseCity = ''
    this.selectedWarehouseCluster = ''
  },
  methods: {
  },
  computed: {
    ...mapState({
      warehouses(state) {
        let warehouses = state.warehouses

        // filter by search text
        warehouses = this.warehouseName ? warehouses.filter(warehouse => warehouse.name.toLowerCase().includes(this.warehouseName.toLowerCase())) : warehouses

        // filter by city
        warehouses = this.selectedCity ? warehouses.filter(warehouse => warehouse.city == this.selectedCity) : warehouses

        // filter by cluster
        warehouses = this.selectedCluster ? warehouses.filter(warehouse => warehouse.cluster == this.selectedCluster) : warehouses

        // filter by space limit
        warehouses = this.minSpaceLimit && this.maxSpaceLimit ? warehouses.filter(warehouse => this.minSpaceLimit <= warehouse.space_available && warehouse.space_available <= this.maxSpaceLimit) : warehouses

        return warehouses
      }
    }),
  }
}
</script>

<style lang="scss" scoped>
table {
  text-align: center;
  border-collapse: collapse;

  th, td {
    border: 1px solid #000;
  }
}
</style>
