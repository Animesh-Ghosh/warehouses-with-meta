<template>
  <div id="warehouse-cities-dropdown">
    <DropdownMenu :value="value"
      :label="label"
      labelCSSId="warehouse-city"
      disabledOptionLabel="Select City"
      :options="warehouseCities"
      @input="$emit('input', $event)"/>
    <slot></slot>
  </div>
</template>

<script>
import { cities } from '@/App.vue'
import dropdownMixin from '@/mixins/dropdownMixin.js'

export default {
  name: 'WarehouseCitiesDropdown',
  mixins: [dropdownMixin],
  data () {
    return {
      warehouseCities: cities,
    }
  },
}
</script>

<style lang="scss">
#warehouse-cities-dropdown {
  display: flex;
  align-items: center;

}
</style>
