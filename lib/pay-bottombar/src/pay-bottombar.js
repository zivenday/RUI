'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-pay-bottombar" }, [_c('span', { staticClass: "r-pay-bottombar__text", class: _vm.hasShopCart ? 'is-shoppingcart' : '' }, [_c('span', [_vm._v(_vm._s(_vm.textName))]), _c('span', [_vm._v(_vm._s(_vm.currency) + _vm._s(_vm.sum))])]), _vm.hasShopCart ? _c('a', { staticClass: "r-pay-bottombar__cart", on: { "click": _vm.handleShopcart } }, [_vm._v("购物车")]) : _vm._e(), _c('a', { staticClass: "r-pay-bottombar__btn", class: _vm.hasShopCart ? 'is-shoppingcart' : '', on: { "click": _vm.handleClick } }, [_vm._v(_vm._s(_vm.buttonName))])]);
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
    },
    hasShopCart: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click', this.sum);
    },
    handleShopcart: function handleShopcart() {
      this.$emit('clickShopcart');
    }
  }
};