'use strict';

exports.__esModule = true;

var _form = require('./src/form.vue');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_form2.default.install = function (Vue) {
  Vue.component(_form2.default.name, _form2.default);
};

exports.default = _form2.default;