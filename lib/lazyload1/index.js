
'use strict';

exports.__esModule = true;

var _directive = require('./src/directive');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.use(_directive2.default);
  },

  directive: _directive2.default
};