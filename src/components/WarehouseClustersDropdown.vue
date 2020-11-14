<template>
  <div id="warehouse-clusters-dropdown">
    <DropdownMenu :value="value"
      :label="label"
      labelCSSId="warehouse-city"
      disabledOptionLabel="Select City"
      :options="warehouseClusters"
      @input="$emit('input', $event)"/>
    <slot></slot>
  </div>
</template>

<script>
import dropdownMixin from '@/mixins/dropdownMixin.js'
import { clusters } from '@/App.vue'

export default {
  name: 'WarehouseClustersDropdown',
  mixins: [dropdownMixin],
  data () {
    return {
      warehouseClusters: clusters,
    }
  }
}
</script>

<style lang="scss" scoped>
#warehouse-clusters-dropdown {
  display: flex;
  align-items: center;
}
</style>