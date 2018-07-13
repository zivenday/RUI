'use strict';

exports.__esModule = true;

var _payBottombar = require('./src/pay-bottombar.vue');

var _payBottombar2 = _interopRequireDefault(_payBottombar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_payBottombar2.default.install = function (Vue) {
  Vue.component(_payBottombar2.default.name, _payBottombar2.default);
};

exports.default = _payBottombar2.default;