'use strict';

exports.__esModule = true;

var _bottomPop = require('./src/bottom-pop.vue');

var _bottomPop2 = _interopRequireDefault(_bottomPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bottomPop2.default.install = function (Vue) {
  Vue.component(_bottomPop2.default.name, _bottomPop2.default);
};

exports.default = _bottomPop2.default;