'use strict';

exports.__esModule = true;

var _carousel = require('./src/carousel.vue');

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carousel2.default.install = function (Vue) {
  Vue.component(_carousel2.default.name, _carousel2.default);
};

exports.default = _carousel2.default;