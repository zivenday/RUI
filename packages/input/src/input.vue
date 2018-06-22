<template>
  <div class="r-input" :class="[
    !!$slots.prefix ? 'r-input--' + 'prefix' : '',
    !!$slots.suffix ? 'r-input--' + 'suffix' : '',
    inputSize ? 'r-input--' + inputSize : '',
    type ? 'r-input--'+ type : ''
    ]" :style="[{ width:pxToview(width), height:pxToview(height),lineHeight:pxToview(height)},pxToview(styles)]">
    <div class="r-input__inner">
      <slot name="prefix" v-if="$slots.prefix"></slot>
      <input v-bind="$props" :type="inputType" :placeholder="!!placeholder?placeholder:''" :value="currentValue" ref="input" @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur">
      <slot name="suffix" v-if="$slots.suffix"></slot>
    </div>
  </div>
</template>

<script>
import StyleFun from '../../utils/mixin/style'
import emitter from '../../utils/mixin/emitter'
export default {
  name: 'RInput',
  props: {
    value: [String, Number],
    placeholder: [String],
    size: [String],
    width: [String, Number],
    height: [String, Number],
    styles: Object,
    type: String,
    inputType: {
      type: String,
      default: 'text'
    },
    isFocus: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    rForm: {
      default: ''
    },
    rFormItem: {
      default: ''
    }
  },
  watch: {
    'value' (val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  // watch: {
  //   value (val, oldValue) {
  //     this.setCurrentValue(val)
  //   }
  // },
  mixins: [StyleFun, emitter],
  computed: {
    _elFormItemSize () {
      return (this.rFormItem || {}).rFormItemSize
    },
    inputSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    }
  },
  mounted () {
    // console.log(this.$ELEMENT)
    // console.log(this.placeholder)

  },
  methods: {
    handleInput (event) {
      this.currentValue = event.target.value
      // console.log('触发监听', event.target.value, this.value)
      this.$emit('input', event.target.value)
      this.setCurrentValue(event.target.value)
    },
    handleChange (event) {
      // console.log('00000')
      this.$emit('change', event.target.value)
    },
    handleBlur (event) {
      this.$emit('blur', event.target.value)
    },
    handleFocus (event) {
      this.$emit('focus', event.target.value)
    },
    setCurrentValue (value) {
      // console.log(1111111)
      this.currentValue = value
      this.dispatch('RFormItem', 'r.form.change', [value])
    }
  }
}
</script>
