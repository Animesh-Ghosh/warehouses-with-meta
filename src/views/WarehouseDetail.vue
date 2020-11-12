<template>
  <div id="warehouse-detail">
    <h1>Warehouse: {{ warehouse.name }}</h1>
    <router-link to="/">Go back to home</router-link>
    <p>Code: {{ warehouse.code }}</p>
    <p>ID: {{ warehouse.id }}</p>
    <p>City: {{ warehouse.city }}</p>
    <p>Space available: {{ warehouse.space_available }}</p>
    <p>Type: {{ warehouse.type }}</p>
    <p>Cluster: {{ warehouse.cluster }}</p>
    <p>Is registered: {{ warehouse.is_registered ? 'Yes' : 'No' }}</p>
    <p>Is live: {{ warehouse.is_live ? 'Yes' : 'No' }}</p>
    <button v-if="!showEditForm"
      @click="showEditForm = true">
      Edit Warehouse
    </button>
    <form v-if="showEditForm" @submit.prevent="onSubmit" @reset.prevent="onReset">
      <div>
        <label for="warehouse-cluster">Cluster:</label>
        <select v-model="newWarehouseData.cluster"
          id="warehouse-cluster"
          name="warehouse-cluster">
          <option v-for="cluster of warehouseClusters"
            :key="cluster.value"
            :value="cluster.value"
            :disabled="cluster.disabled">
            {{ cluster.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="warehouse-name">Name:</label>
        <input v-model="newWarehouseData.name"
          id="warehouse-name"
          type="text"
          name="warehouse-name"/>
      </div>
      <div>
        <label for="warehouse-city">City:</label>
        <select v-model="newWarehouseData.city"
          id="warehouse-city"
          name="warehouse-city">
          <option v-for="city of warehouseCities"
            :key="city.value"
            :value="city.value"
            :disabled="city.disabled">
            {{ city.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="warehouse-space-available">Space available:</label>
        <input v-model.number="newWarehouseData.space_available"
          id="warehouse-space-available"
          type="number"
          name="warehouse-space-available"/>
      </div>
      <div>
        <label for="warehouse-is-live">Is Live:</label>
        <input v-model="newWarehouseData.is_live"
          id="warehouse-is-live"
          type="checkbox"
          name="warehouse-is-live"/>
      </div>
      <div>
        <input type="reset" name="reset-form" value="Cancel Edit">
        <input type="submit" name="edit-warehouse" value="Edit Warehouse"/>
      </div>
    </form>
    <hr/>
    <button @click="addMeta">Add Custom Fields</button>
  </div>
</template>

<script>
import { cities, clusters } from '@/App.vue'
import { mapState, mapMutations } from 'vuex'
import { EDIT_WAREHOUSE } from '@/store/mutation-types'

export default {
  name: 'WarehouseDetail',
  data () {
    return {
      showEditForm: false,
      warehouseCities: cities,
      warehouseClusters: clusters,
      newWarehouseData: {
        cluster : '',
        name: '',
        city: '',
        space_available: '',
        is_live: false,
      }
    }
  },
  created() {
    // populate form data
    this.newWarehouseData.cluster = this.warehouse.cluster
    this.newWarehouseData.name = this.warehouse.name
    this.newWarehouseData.city = this.warehouse.city
    this.newWarehouseData.space_available = this.warehouse.space_available
    this.newWarehouseData.is_live = this.warehouse.is_live
  },
  methods: {
    onSubmit() {
      this.showEditForm = false

      this.editWarehouseData({
        warehouseId: this.warehouse.id,
        newWarehouseData: this.newWarehouseData
      })
    },
    onReset() {
      this.showEditForm = false

      // reset form data
      this.newWarehouseData.cluster = this.warehouse.cluster
      this.newWarehouseData.name = this.warehouse.name
      this.newWarehouseData.city = this.warehouse.city
      this.newWarehouseData.space_available = this.warehouse.space_available
      this.newWarehouseData.is_live = this.warehouse.is_live
    },
    addMeta() {
      console.log('Meta values will be added from here!')
    },
    ...mapMutations({
      editWarehouseData: EDIT_WAREHOUSE,
    })
  },
  computed: {
    ...mapState({
      warehouse(state) {
        return state.warehouses.find(warehouse => warehouse.id == this.$route.params.id)
      },
    })
  },
}
</script>

<style lang="scss" scoped>
form {
  border: 0.25rem dotted #000;
  border-radius: 0.5rem;
}
</style>
