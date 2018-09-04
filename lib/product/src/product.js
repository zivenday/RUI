'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-product" }, [_c('div', { staticClass: "r-product__show" }, [_c('r-carousel', _vm._l(_vm.showPicList, function (pic, index) {
      return _c('r-carousel-item', { key: index }, [_c('img', { directives: [{ name: "lazy", rawName: "v-lazy", value: pic["" + _vm.srcKey], expression: "pic[`${srcKey}`]" }], attrs: { "alt": pic.alt ? pic.alt : '' } })]);
    }))], 1), _c('div', { staticClass: "r-product__info" }, [_c('div', [_vm._v(_vm._s(_vm.product.name))]), _c('div', [_c('span', [_vm._v("￥")]), _c('span', [_vm._v(_vm._s(_vm.product.price))])])]), _c('div', { staticClass: "r-product__tag" }, [_c('div', [_c('span', [_vm._v("运费")]), _c('span', [_vm._v(_vm._s(_vm.carriage))])]), _vm._l(_vm.serviceList, function (service, index) {
      return _c('div', { key: index + '0' }, [_c('span', [_vm._v("服务")]), _c('r-icon', { attrs: { "name": "correct", "index": index + '0' } }), _c('span', { staticStyle: { "color": "#444" } }, [_vm._v(_vm._s(service["" + _vm.serviceKey]))])], 1);
    })], 2), _c('div', { staticClass: "r-product__navbar" }, [_vm._l(_vm.choiceList, function (choice, index) {
      return _c('r-page-navbar', { key: index + '1', attrs: { "height": 40 }, on: { "click": _vm.skuClick } }, [_c('span', [_vm._v("规格")]), _c('span', [_vm._v("选择")]), index <= 2 ? _c('span', [_vm._v(_vm._s(choice["" + _vm.choiceKey]))]) : _vm._e(), index > 2 ? _c('span', [_vm._v("...")]) : _vm._e()]);
    }), _vm._l(_vm.paramList, function (param, index) {
      return _c('r-page-navbar', { key: index + '2', attrs: { "height": 40 }, on: { "click": _vm.paramClick } }, [_c('span', [_vm._v("参数")]), index <= 2 ? _c('span', [_vm._v(_vm._s(param["" + _vm.paramKey]))]) : _vm._e(), index > 2 ? _c('span', [_vm._v("...")]) : _vm._e()]);
    })], 2), _c('div', { staticClass: "r-product__detail" }, [_vm._m(0), _c('div', _vm._l(_vm.detailPicList, function (pic, index) {
      return _c('div', { key: index }, [_c('img', { directives: [{ name: "lazy", rawName: "v-lazy", value: pic["" + _vm.srcKey], expression: "pic[`${srcKey}`]" }], attrs: { "alt": pic.alt ? pic.alt : '' } })]);
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
    carriage: {
      type: [Number, String],
      default: '免邮'
    },
    serviceList: {
      type: Array,
      default: function _default() {
        return [{
          name: '1年保修'
        }];
      }
    },
    choiceList: {
      type: Array,
      default: function _default() {
        return [{
          name: '清晰度'
        }];
      }
    },
    paramList: {
      type: Array,
      default: function _default() {
        return [{
          name: '清晰度'
        }];
      }
    },
    product: {
      type: Object,
      default: function _default() {
        return {
          name: '商品',
          price: 100
        };
      }
    },
    srcKey: {
      type: String,
      default: 'src'
    },
    choiceKey: {
      type: String,
      default: 'name'
    },
    serviceKey: {
      type: String,
      default: 'name'
    },
    paramKey: {
      type: String,
      default: 'name'
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    skuClick: function skuClick() {
      this.$emit('sku-click');
    },
    paramClick: function paramClick() {
      this.$emit('param-click');
    }
  }
};