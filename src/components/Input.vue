<template>
  <div>
    <label :for="labelCSSId">{{ label }}:</label>
    <input :value="value"
      :id="labelCSSId"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
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
      required: true,
    }
  },
}
</script>

<style lang="css" scoped>
</style>