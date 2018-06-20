'use strict';

exports.__esModule = true;

var _checkboxButton = require('../checkbox/src/checkbox-button.vue');

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_checkboxButton2.default.install = function (Vue) {
  Vue.component(_checkboxButton2.default.name, _checkboxButton2.default);
};

exports.default = _checkboxButton2.default;