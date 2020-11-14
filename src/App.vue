<template>
  <div id="app">
    <keep-alive :exclude="['WarehouseDetail']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import warehouses from './warehouses.json'
import { mapMutations } from 'vuex'
import { INIT_WAREHOUSES } from '@/store/mutation-types'

// setup dropdowns for filters
export const cities = new Array()

export const clusters = new Array()

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
        })
      }

      if (!clusters.find(cluster => cluster.value == warehouse.cluster)) {
        clusters.push({
          value: warehouse.cluster,
          label: warehouse.cluster,
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
  font-family: 'Montserrat Bold';
  src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat Regular';
  src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat Medium';
  src: url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat SemiBold';
  src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

:root {
  --mon-b: 'Montserrat Bold';
  --mon: 'Montserrat Regular';
  --mon-m: 'Montserrat Medium';
  --mon-sb: 'Montserrat SemiBold';
  font-family: var(--mon), sans-serif;
  font-size: 16px;
}
</style>
