'use strict';

exports.__esModule = true;

var _tabs = require('./src/tabs.vue');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tabs2.default.install = function (Vue) {
  Vue.component(_tabs2.default.name, _tabs2.default);
};

exports.default = _tabs2.default;