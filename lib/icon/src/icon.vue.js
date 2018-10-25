'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "iconfont", class: 'r-icon-' + _vm.name, staticStyle: { "display": "inline-block" }, style: _vm.pxToview(_vm.styles) }, [_vm._t("default")], 2);
  },

  name: 'RIcon',
  mixins: [_style2.default],
  props: {
    name: String,
    styles: Object
  }
};