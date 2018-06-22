'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-lead", style: _vm.styles }, [_vm.$slots.default ? _c('span', [_vm._t("default")], 2) : _vm._e()]);
  },

  name: 'RLead',
  props: {
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
};