'use strict';

exports.__esModule = true;

var _cashBulkGroup = require('./src/cashBulk-group.vue');

var _cashBulkGroup2 = _interopRequireDefault(_cashBulkGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cashBulkGroup2.default.install = function (Vue) {
  Vue.component(_cashBulkGroup2.default.name, _cashBulkGroup2.default);
};

exports.default = _cashBulkGroup2.default;