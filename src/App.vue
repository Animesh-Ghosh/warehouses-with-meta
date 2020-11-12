<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import warehouses from './warehouses.json'
import { mapMutations } from 'vuex'
import { INIT_WAREHOUSES } from '@/store/mutation-types'

// setup dropdowns for filters
export const cities = [
  { value: '', label: 'Select City', disabled: true }
]

export const clusters = [
  { value: '', label: 'Select Cluster', disabled: true }
]

export const spaceLimits = [
  { value: '', label: 'Select Space Limit', disabled: true }
]

export default {
  name: 'App',
  created() {
    this.populateStoreWarehouses(warehouses)

    // create cities, clusters for fitler dropdowns
    for (const warehouse of warehouses) {
      if (!cities.find(city => city.value == warehouse.city)) {
        cities.push({
          value: warehouse.city,
          label: warehouse.city,
          disabled: false,
        })
      }

      if (!clusters.find(cluster => cluster.value == warehouse.cluster)) {
        clusters.push({
          value: warehouse.cluster,
          label: warehouse.cluster,
          disabled: false,
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      populateStoreWarehouses: INIT_WAREHOUSES,
    })
  }
}
</script>

<style lang="scss">
@charset 'utf-8';

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: Montserrat;
  src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
}

h1 {
  font-family: Montserrat;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #000;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #ED3232;
  }
}
</style>
