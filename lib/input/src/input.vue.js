'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style');

var _style2 = _interopRequireDefault(_style);

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-input", class: [!!_vm.$slots.prefix ? 'r-input--' + 'prefix' : '', !!_vm.$slots.suffix ? 'r-input--' + 'suffix' : '', _vm.inputSize ? 'r-input--' + _vm.inputSize : '', _vm.type ? 'r-input--' + _vm.type : ''], style: [{ width: _vm.pxToview(_vm.width), height: _vm.pxToview(_vm.height), lineHeight: _vm.pxToview(_vm.height) }, _vm.pxToview(_vm.styles)] }, [_c('div', { staticClass: "r-input__inner" }, [_vm.$slots.prefix ? _vm._t("prefix") : _vm._e(), _c('input', _vm._b({ ref: "input", attrs: { "type": _vm.inputType, "placeholder": !!_vm.placeholder ? _vm.placeholder : '' }, domProps: { "value": _vm.currentValue }, on: { "input": _vm.handleInput, "change": _vm.handleChange, "focus": _vm.handleFocus, "blur": _vm.handleBlur } }, 'input', _vm.$props, false)), _vm.$slots.suffix ? _vm._t("suffix") : _vm._e()], 2)]);
  },

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
    'value': function value(val, oldValue) {
      this.setCurrentValue(val);
    }
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },

  mixins: [_style2.default, _emitter2.default],
  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.rFormItem || {}).rFormItemSize;
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  mounted: function mounted() {},

  methods: {
    handleInput: function handleInput(event) {
      this.currentValue = event.target.value;

      this.$emit('input', event.target.value);
      this.setCurrentValue(event.target.value);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event.target.value);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event.target.value);
    },
    setCurrentValue: function setCurrentValue(value) {
      this.currentValue = value;
      this.dispatch('RFormItem', 'r.form.change', [value]);
    }
  }
};