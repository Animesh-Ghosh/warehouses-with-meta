<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import warehouses from './warehouses.json'

export default {
  name: 'App',
  created() {
    console.log(warehouses)
    this.$store.commit('setWarehouses', warehouses)
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
