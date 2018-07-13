'use strict';

exports.__esModule = true;

var _carouselItem = require('./src/carousel-item.vue');

var _carouselItem2 = _interopRequireDefault(_carouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carouselItem2.default.install = function (Vue) {
  Vue.component(_carouselItem2.default.name, _carouselItem2.default);
};

exports.default = _carouselItem2.default;