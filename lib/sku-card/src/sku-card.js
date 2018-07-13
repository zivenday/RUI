'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-sku-card" }, [_c('div', { staticClass: "r-sku-card__img" }, [_c('img', { attrs: { "src": _vm.src, "alt": "" } })]), _c('div', { staticClass: "r-sku-card__info" }, [_c('div', [_vm._v(_vm._s(_vm.title))]), _c('div', [_vm._v(_vm._s(_vm.name))]), _c('div', [_c('span', [_vm._v("￥" + _vm._s(_vm.price))]), _c('span', [_vm._v("x" + _vm._s(_vm.count))])])])]);
  },

  name: 'RSkuCard',
  componentName: 'RSkuCard',
  props: {
    title: {
      type: String,
      default: '卡标题'
    },
    src: {
      type: String,
      default: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg'
    },
    name: {
      type: String,
      default: '套餐名'
    },
    count: {
      type: [Number, String],
      default: 1,
      validator: function validator(value) {
        return value > 0;
      }
    },
    price: {
      type: Number,
      default: 100,
      validator: function validator(value) {
        return value > 0;
      }
    }
  },
  data: function data() {
    return {};
  }
};