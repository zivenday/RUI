'use strict';

exports.__esModule = true;

var _lead = require('./src/lead.vue');

var _lead2 = _interopRequireDefault(_lead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lead2.default.install = function (Vue) {
  Vue.component(_lead2.default.name, _lead2.default);
};

exports.default = _lead2.default;