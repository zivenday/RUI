'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-count-bar" }, [_c('button', { staticClass: "r-count-bar__mins", class: { 'is-disabled': _vm.disabled || _vm.isError || _vm.disabledMins }, attrs: { "disabled": _vm.disabled || _vm.isError || _vm.disabledMins }, on: { "click": _vm.handleMins } }, [_c('r-icon', { attrs: { "name": "w-mins" } })], 1), _c('input', { staticClass: "r-count-bar__input", class: { 'is-disabled': _vm.disabled || _vm.isError || _vm.disabledInput }, attrs: { "type": "number", "disabled": _vm.disabled || _vm.isError || _vm.disabledInput }, domProps: { "value": _vm.currentValue }, on: { "blur": _vm.handleBlur, "input": _vm.handleInput } }), _c('button', { staticClass: "r-count-bar__plus", class: { 'is-disabled': _vm.disabled || _vm.isError || _vm.disabledPlus }, attrs: { "disabled": _vm.disabled || _vm.isError || _vm.disabledPlus }, on: { "click": _vm.handlePlus } }, [_c('r-icon', { attrs: { "name": "w-plus" } })], 1)]);
  },

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
  data: function data() {
    return {
      isError: false,
      disabledMins: false,
      disabledPlus: false,
      currentValue: this.value ? this.value : 1
    };
  },

  watch: {
    'value': function value(val, oldVal) {},
    'currentValue': function currentValue(val) {
      if (val !== '') {
        this.disabledMins = val <= this.min;
        this.disabledPlus = val >= this.max;
      }
    },
    max: function max(val) {
      if (this.currentValue >= val) {
        this.currentValue = val;
        this.disabledPlus = true;
      } else {
        this.disabledPlus = false;
      }
    }
  },
  mounted: function mounted() {
    this.isError = this.min > this.max || this.min < 0;
    !this.isError ? this.checkAndFliter(this.currentValue) : undefined;
  },

  methods: {
    checkAndFliter: function checkAndFliter(val) {
      console.log('checkAndFliter', val, this.min, this.max);
      if (isNaN(val) || val < this.min) {
        return this.min;
      } else if (val > this.max) {
        return this.max;
      } else {
        this.disabledMins = val === this.min;
        this.disabledPlus = val === this.max;
        return val;
      }
    },
    handleMins: function handleMins() {
      --this.currentValue;
      this.$emit('change', this.currentValue);
      this.$emit('mins', this.currentValue);
    },
    handlePlus: function handlePlus() {
      ++this.currentValue;

      this.$emit('change', this.currentValue);
      this.$emit('plus', this.currentValue);
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;

      console.log('value:', value);
      this.currentValue = value ? this.checkAndFliter(+value) : value;
      event.target.value = this.currentValue;
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    },
    handleBlur: function handleBlur(event) {
      var value = event.target.value;

      if (value === '') {
        this.currentValue = this.checkAndFliter(this.value);
        event.target.value = this.currentValue;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
      this.$emit('blur', this.currentValue);
    }
  }

};