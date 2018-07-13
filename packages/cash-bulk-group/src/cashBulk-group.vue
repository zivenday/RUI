<template>
  <div class="r-cash-bulk-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RCashBulkGroup',
  componentName: 'RCashBulkGroup',
  props: {
    value: {}
  },
  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  mounted () {
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[type=radio]')[0]
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  }
}
</script>
