'use strict';

exports.__esModule = true;

var _addressGroup = require('./src/address-group.vue');

var _addressGroup2 = _interopRequireDefault(_addressGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addressGroup2.default.install = function (Vue) {
  Vue.component(_addressGroup2.default.name, _addressGroup2.default);
};

exports.default = _addressGroup2.default;