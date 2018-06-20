'use strict';

exports.__esModule = true;

var _radio = require('./src/radio.vue');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_radio2.default.install = function (Vue) {
  Vue.component('r-radio', _radio2.default);
};

exports.default = _radio2.default;