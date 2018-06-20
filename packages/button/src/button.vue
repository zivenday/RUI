<template>
  <button @click="handleClick" :disabled="disabled" class="r-button" :class="[
      type ? 'r-button--' + type : '',
      buttonSize ? 'r-button--' + buttonSize : '',
      {
        'is-disabled': disabled
      }
    ]" :style="[pxToview(styles),{width:pxToview(width),height:pxToview(height)}]">
    <span v-if="$slots.default" @click="handleInnerClick">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import StyleFun from 'recharger/src/utils/mixin/style.js'
export default {
  name: 'RButton',
  mixins: [StyleFun],
  props: {
    styles: Object,
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    width: [Number, String],
    height: [Number, String],
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean
  },
  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    handleInnerClick (evt) {
      if (this.disabled) {
        evt.stopPropagation()
      }
    }
  }
}
</script>
