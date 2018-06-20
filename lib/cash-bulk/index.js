'use strict';

exports.__esModule = true;

var _cashBulk = require('./src/cashBulk.vue');

var _cashBulk2 = _interopRequireDefault(_cashBulk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cashBulk2.default.install = function (Vue) {
  Vue.component(_cashBulk2.default.name, _cashBulk2.default);
};

exports.default = _cashBulk2.default;