<template>
  <table id="warehouses-table">
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>City</th>
        <th>Cluster</th>
        <th>Space Available</th>
        <th>Live</th>
      </tr>
    </thead>
    <tbody>
     <WarehousesTableRow v-for="warehouse of warehouses"
        :key="warehouse.id"
        :warehouse="warehouse"/>
    </tbody>
  </table>
</template>

<script>
import WarehousesTableRow from './WarehousesTableRow.vue'

export default {
  name: 'WarehousesTable',
  props: {
    warehouses: {
      type: Array,
      required: true,
    }
  },
  components: {
    WarehousesTableRow,
  }
}
</script>

<style lang="scss" scoped="">
</style>
