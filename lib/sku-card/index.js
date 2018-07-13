'use strict';

exports.__esModule = true;

var _skuCard = require('./src/sku-card.vue');

var _skuCard2 = _interopRequireDefault(_skuCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_skuCard2.default.install = function (Vue) {
  Vue.component(_skuCard2.default.name, _skuCard2.default);
};

exports.default = _skuCard2.default;