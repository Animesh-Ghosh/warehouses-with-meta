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
    <form v-if="showEditForm"
      id="edit-warehouse-form"
      @submit.prevent="onSubmit"
      @reset.prevent="onReset">
      <WarehouseClustersDropdown v-model="newWarehouseData.cluster"
        label="Cluster"/>
      <div>
        <label for="warehouse-name">Name:</label>
        <input v-model="newWarehouseData.name"
          id="warehouse-name"
          type="text"
          name="warehouse-name"/>
      </div>
      <WarehouseCitiesDropdown v-model="newWarehouseData.city"
        label="City"/>
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
        <input type="reset" name="reset-form" value="Cancel Edit"/>
        <input type="submit" name="edit-warehouse" value="Edit Warehouse"/>
      </div>
    </form>
    <hr/>
    <div v-if="!showMetaAddForm">
      <button @click="showMetaAddForm = true">Add Custom Fields</button>
      <ul v-if="warehouseCustomFields.length">
        <li v-for="customField of warehouseCustomFields"
          :key="customField.id">
          <p>{{ customField.key }}: {{ customField.value }}</p>
        </li>
      </ul>
      <p v-else>No custom fields!</p>
    </div>
    <form v-else
      id="add-warehouse-meta-form"
      @submit.prevent="onSubmitMeta"
      @reset.prevent="onResetMeta">
      <label for="meta-key">Key:</label>
      <input v-model="warehouseMeta.key"
        id="meta-key"
        type="text"
        name="meta-key"/>
      <label for="meta-value">Value:</label>
      <input v-model="warehouseMeta.value"
        id="meta-value"
        type="text"
        name="meta-value"/>
      <input type="reset" name="reset" value="Cancel"/>
      <input type="submit" name="add-field" value="Add Field"/>
    </form>
  </div>
</template>

<script>
import { cities, clusters } from '@/App.vue'
import { mapState, mapMutations } from 'vuex'
import { EDIT_WAREHOUSE, SET_WAREHOUSE_META } from '@/store/mutation-types'
import WarehouseClustersDropdown from '@/components/WarehouseClustersDropdown.vue'
import WarehouseCitiesDropdown from '@/components/WarehouseCitiesDropdown.vue'

export default {
  name: 'WarehouseDetail',
  components: {
    WarehouseClustersDropdown,
    WarehouseCitiesDropdown,
  },
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
      },
      showMetaAddForm: false,
      warehouseMeta: {
        key: '',
        value: '',
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
    onSubmitMeta() {
      this.showMetaAddForm = false

      console.log(this.warehouseMeta)
      this.addWarehouseMeta({ warehouseId: this.warehouse.id, warehouseMeta: this.warehouseMeta })
      this.onResetMeta()
    },
    onResetMeta() {
      this.showMetaAddForm = false
      this.warehouseMeta.key = this.warehouseMeta.value = ''
    },
    ...mapMutations({
      editWarehouseData: EDIT_WAREHOUSE,
      addWarehouseMeta: SET_WAREHOUSE_META,
    })
  },
  computed: {
    ...mapState({
      warehouse(state) {
        return state.warehouses.find(warehouse => warehouse.id == this.$route.params.id)
      },
      warehouseCustomFields(state) {
        return state.warehousesMetas.filter(warehouseMeta => warehouseMeta.warehouseId == this.$route.params.id)
      }
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
