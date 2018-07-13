'use strict';

exports.__esModule = true;

var _address = require('./src/address.vue');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_address2.default.install = function (Vue) {
  Vue.component(_address2.default.name, _address2.default);
};

exports.default = _address2.default;