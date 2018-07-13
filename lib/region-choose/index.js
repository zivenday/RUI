'use strict';

exports.__esModule = true;

var _regionChoose = require('./src/region-choose.vue');

var _regionChoose2 = _interopRequireDefault(_regionChoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_regionChoose2.default.install = function (Vue) {
  Vue.component(_regionChoose2.default.name, _regionChoose2.default);
};

exports.default = _regionChoose2.default;