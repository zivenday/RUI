'use strict';

exports.__esModule = true;

var _autoComplete = require('./src/auto-complete.vue');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_autoComplete2.default.install = function (Vue) {
  Vue.component(_autoComplete2.default.name, _autoComplete2.default);
};

exports.default = _autoComplete2.default;