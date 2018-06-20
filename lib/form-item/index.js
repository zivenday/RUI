'use strict';

exports.__esModule = true;

var _formItem = require('./src/form-item.vue');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_formItem2.default.install = function (Vue) {
  Vue.component(_formItem2.default.name, _formItem2.default);
};

exports.default = _formItem2.default;