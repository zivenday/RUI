
'use strict';

exports.__esModule = true;

var _countBar = require('./src/count-bar.vue');

var _countBar2 = _interopRequireDefault(_countBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_countBar2.default.install = function (Vue) {
  Vue.component(_countBar2.default.name, _countBar2.default);
};

exports.default = _countBar2.default;