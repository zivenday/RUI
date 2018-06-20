
<template>
  <div class="r-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from 'recharger/src/utils/mixin/emitter'

export default {
  name: 'RCheckboxGroup',

  componentName: 'RCheckboxGroup',

  mixins: [Emitter],

  inject: {
    rFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    checkboxGroupSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    }
  },

  watch: {
    value (value) {
      this.dispatch('RFormItem', 'r.form.change', [value])
    }
  }
}
</script>
