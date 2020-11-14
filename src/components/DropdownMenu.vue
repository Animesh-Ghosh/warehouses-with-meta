<template>
  <div class="dropdown">
    <label :for="labelCSSId">{{ label }}:</label>
    <select :id="labelCSSId"
      :value="value"
      @change="$emit('input', $event.target.value)">
      <option value="" selected disabled>{{ disabledOptionLabel }}</option>
      <option v-for="option of options"
        :key="option.value"
        :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    label: {
      type: String,
      required: true,
    },
    labelCSSId: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    disabledOptionLabel: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
