<template>
  <div>
    <p>{{ warehouse.id }}</p>
    <p>{{ warehouse.name }}</p>
  </div>
</template>

<script>
export default {

  name: 'WarehouseDetail',
  created() {
    this.warehouse = this.$store.state.warehouses.filter(warehouse => warehouse.id == this.$route.params.id)[0]
  },

  data () {
    return {
      'warehouse': {},

    }
  }
}
</script>

<style lang="css" scoped>
</style>