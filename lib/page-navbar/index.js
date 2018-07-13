'use strict';

exports.__esModule = true;

var _pageNavbar = require('./src/page-navbar.vue');

var _pageNavbar2 = _interopRequireDefault(_pageNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pageNavbar2.default.install = function (Vue) {
  Vue.component(_pageNavbar2.default.name, _pageNavbar2.default);
};

exports.default = _pageNavbar2.default;