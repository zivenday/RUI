'use strict';

exports.__esModule = true;

var _dialog = require('./src/dialog.vue');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dialog2.default.install = function (Vue) {
  Vue.component(_dialog2.default.name, _dialog2.default);
};

exports.default = _dialog2.default;