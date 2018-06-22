'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "r-button", class: [_vm.type ? 'r-button--' + _vm.type : '', _vm.buttonSize ? 'r-button--' + _vm.buttonSize : '', {
        'is-disabled': _vm.disabled
      }], style: [_vm.pxToview(_vm.styles), { width: _vm.pxToview(_vm.width), height: _vm.pxToview(_vm.height) }], attrs: { "disabled": _vm.disabled }, on: { "click": _vm.handleClick } }, [_vm.$slots.default ? _c('span', { on: { "click": _vm.handleInnerClick } }, [_vm._t("default")], 2) : _vm._e()]);
  },

  name: 'RButton',
  mixins: [_style2.default],
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
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize: function buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    },
    handleInnerClick: function handleInnerClick(evt) {
      if (this.disabled) {
        evt.stopPropagation();
      }
    }
  }
};