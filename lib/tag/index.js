'use strict';

exports.__esModule = true;

var _tag = require('./src/tag.vue');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tag2.default.install = function (Vue) {
  Vue.component(_tag2.default.name, _tag2.default);
};

exports.default = _tag2.default;