<template>
  <tr>
    <td>
      <router-link :to="{ name: 'WarehouseDetail', params: { id: warehouse.id } }">
        {{ warehouse.code }}
      </router-link>
    </td>
    <td>{{ warehouse.name }}</td>
    <td>{{ warehouse.city }}</td>
    <td>{{ warehouse.cluster }}</td>
    <td>{{ warehouse.space_available }}</td>
    <td>{{ warehouse.is_live ? 'Yes' : 'No' }}</td>
  </tr>
</template>

<script>
export default {
  name: 'WarehousesTableRow',
  props: {
    warehouse: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped="">
</style>
