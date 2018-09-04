'use strict';

exports.__esModule = true;

var _scrollFresh = require('./src/scroll-fresh.vue');

var _scrollFresh2 = _interopRequireDefault(_scrollFresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_scrollFresh2.default.install = function (Vue) {
  Vue.component(_scrollFresh2.default.name, _scrollFresh2.default);
};

exports.default = _scrollFresh2.default;