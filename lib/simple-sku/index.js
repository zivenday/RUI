'use strict';

exports.__esModule = true;

var _simpleSku = require('./src/simple-sku.vue');

var _simpleSku2 = _interopRequireDefault(_simpleSku);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_simpleSku2.default.install = function (Vue) {
  Vue.component(_simpleSku2.default.name, _simpleSku2.default);
};

exports.default = _simpleSku2.default;