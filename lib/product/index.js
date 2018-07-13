'use strict';

exports.__esModule = true;

var _product = require('./src/product.vue');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_product2.default.install = function (Vue) {
  Vue.component(_product2.default.name, _product2.default);
};

exports.default = _product2.default;