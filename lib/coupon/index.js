

'use strict';

exports.__esModule = true;

var _coupon = require('./src/coupon.vue');

var _coupon2 = _interopRequireDefault(_coupon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_coupon2.default.install = function (Vue) {
  Vue.component(_coupon2.default.name, _coupon2.default);
};

exports.default = _coupon2.default;