'use strict';

exports.__esModule = true;

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-checkbox-group", attrs: { "role": "group", "aria-label": "checkbox-group" } }, [_vm._t("default")], 2);
  },

  name: 'RCheckboxGroup',

  componentName: 'RCheckboxGroup',

  mixins: [_emitter2.default],

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
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize: function checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value: function value(_value) {
      this.dispatch('RFormItem', 'r.form.change', [_value]);
    }
  }
};