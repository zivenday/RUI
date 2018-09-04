<template>
  <div class="r-count-bar">
    <button @click="handleMins" :class="{'is-disabled':disabled||isError||disabledMins}" :disabled="disabled||isError||disabledMins" class="r-count-bar__mins">
      <r-icon name="w-mins"></r-icon>
    </button>
    <input type="number" :value="currentValue" :class="{'is-disabled':disabled||isError||disabledInput}" :disabled="disabled||isError||disabledInput" class="r-count-bar__input" @blur="handleBlur" @input="handleInput">
    <button @click="handlePlus" :class="{'is-disabled':disabled||isError||disabledPlus}" :disabled="disabled||isError||disabledPlus" class="r-count-bar__plus">
      <r-icon name="w-plus"></r-icon>
    </button>
  </div>
</template>
<script>
export default {
  name: 'RCountBar',
  componentName: 'RCountBar',
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      isError: false,
      disabledMins: false,
      disabledPlus: false,
      currentValue: this.value ? this.value : 1
    }
  },
  watch: {
    'value' (val, oldVal) {
      // console.log('watch...')
    },
    'currentValue' (val) {
      if (val !== '') {
        this.disabledMins = val <= this.min
        this.disabledPlus = val >= this.max
      }
    },
    max (val) {
      if (this.currentValue >= val) {
        this.currentValue = val
        this.disabledPlus = true
        // this.$emit('change', this.currentValue)
      } else {
        this.disabledPlus = false
      }
    }
  },
  mounted () {
    this.isError = this.min > this.max || this.min < 0
    !this.isError ? this.checkAndFliter(this.currentValue) : undefined
  },
  methods: {
    checkAndFliter (val) {
      console.log('checkAndFliter', val, this.min, this.max)
      if (isNaN(val) || val < this.min) {
        return this.min
      } else if (val > this.max) {
        return this.max
      } else {
        this.disabledMins = val === this.min
        this.disabledPlus = val === this.max
        return val
      }
    },
    handleMins () {
      --this.currentValue
      this.$emit('change', this.currentValue)
      this.$emit('mins', this.currentValue)
    },
    handlePlus () {
      ++this.currentValue
      // this.checkAndFliter(++this.currentValue)
      this.$emit('change', this.currentValue)
      this.$emit('plus', this.currentValue)
    },
    /**
     * @description 输入改变时监控
     *  1.如果有字符，必须经过检查和过滤
     * 2.如果没有数字字符，则通过
     */
    handleInput (event) {
      const { value } = event.target
      console.log('value:', value)
      this.currentValue = (value ? this.checkAndFliter(+value) : value)
      event.target.value = this.currentValue//currentValue与事件value同步
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    /**
     * @description 失去焦点时监控
     *  1.如果失去焦点时事件value为空则改则进入检查和过滤,触发输入和变更事件
     * 2.如果不是1情况，则正常触发失去焦点事件
    */
    handleBlur (event) {
      const { value } = event.target
      if (value === '') {
        this.currentValue = this.checkAndFliter(this.value)
        event.target.value = this.currentValue
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      }
      this.$emit('blur', this.currentValue)
    }
  }

}
</script>
