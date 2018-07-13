'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-product" }, [_c('div', { staticClass: "r-product__show" }, [_c('r-carousel', { attrs: { "height": 320 } }, _vm._l(_vm.showPicList, function (pic, index) {
      return _c('r-carousel-item', { key: index }, [_c('img', { attrs: { "src": pic.src, "alt": pic.alt ? pic.alt : '' } })]);
    }))], 1), _c('div', { staticClass: "r-product__info" }, [_c('div', [_vm._v(_vm._s(_vm.product.name))]), _c('div', [_vm._v("\n      ￥"), _c('span', [_vm._v(_vm._s(_vm.product.price))])])]), _c('div', { staticClass: "r-product__tag" }, [_c('div', [_vm._v("运费：免邮")]), _c('div', [_c('r-icon', { attrs: { "name": "correct" } }), _c('span', [_vm._v("品质保证")]), _c('r-icon', { attrs: { "name": "correct" } }), _c('span', [_vm._v("全面质检")])], 1)]), _c('div', { staticClass: "r-product__navbar" }, [_c('r-page-navbar', { attrs: { "height": 40 }, on: { "click": _vm.skuClick } }, [_c('span', [_vm._v("选择：" + _vm._s(_vm.sku.name ? _vm.sku.name : '套餐'))])]), _c('r-page-navbar', { attrs: { "height": 40 }, on: { "click": _vm.paramerClick } }, [_c('span', [_vm._v("商品参数")])])], 1), _c('div', { staticClass: "r-product__detail" }, [_vm._m(0), _c('div', _vm._l(_vm.detailPicList, function (pic, index) {
      return _c('div', { key: index }, [_c('img', { attrs: { "src": pic.src, "alt": pic.alt ? pic.alt : '' } })]);
    }))])]);
  },

  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('span'), _c('span', [_vm._v(" 商品详情 ")]), _c('span')]);
  }],

  name: 'RProduct',
  componentName: 'RProduct',
  mixins: [_style2.default],
  props: {
    showPicList: Array,
    detailPicList: Array,
    sku: {
      type: Object,
      default: function _default() {
        return {
          name: '套餐'
        };
      }
    },
    product: {
      type: Object,
      default: function _default() {
        return {
          name: '商品',
          price: '价格'
        };
      }
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    skuClick: function skuClick() {
      this.$emit('sku-click');
    },
    paramerClick: function paramerClick() {
      this.$emit('param-click');
    }
  }
};