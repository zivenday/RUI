'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-pay-bottombar" }, [_c('span', { staticClass: "r-pay-bottombar__text" }, [_c('span', [_vm._v(_vm._s(_vm.textName))]), _c('span', [_vm._v(_vm._s(_vm.currency) + _vm._s(_vm.sum))])]), _c('a', { staticClass: "r-pay-bottombar__btn", on: { "click": _vm.handleClick } }, [_vm._v(_vm._s(_vm.buttonName))])]);
  },

  name: 'RPayBottombar',
  componentName: 'RPayBottombar',
  props: {
    buttonName: {
      type: String,
      default: '去支付'
    },
    textName: {
      type: String,
      default: '实付款：'
    },
    currency: {
      type: String,
      default: '￥'
    },
    sum: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click', this.sum);
    }
  }
};