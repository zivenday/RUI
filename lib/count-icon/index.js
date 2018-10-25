
'use strict';

exports.__esModule = true;

var _countIcon = require('./src/count-icon.vue');

var _countIcon2 = _interopRequireDefault(_countIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_countIcon2.default.install = function (Vue) {
  Vue.component(_countIcon2.default.name, _countIcon2.default);
};

exports.default = _countIcon2.default;