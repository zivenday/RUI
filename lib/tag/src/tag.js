'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', [_c('span', { staticClass: "r-tag", class: [_vm.type ? 'r-tag--' + _vm.type : ''] }, [_vm._t("default")], 2)]);
  },

  name: 'RTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String
  }
};