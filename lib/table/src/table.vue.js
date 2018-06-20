'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-table", class: [_vm.border ? 'r-table--' + 'border' : ''], style: { width: _vm.width ? _vm.width : '', height: _vm.height ? _vm.height : '' } }, [_c('table', { staticClass: "r-table__inner", style: { width: _vm.width ? _vm.width : '', height: _vm.height ? _vm.height : '' } }, [!!_vm.headers ? _c('thead', { staticClass: "r-table__thead" }, [_c('tr', _vm._l(_vm.headers, function (val, index) {
      return _c('td', { key: index }, [_c('div', [_vm._v(_vm._s(val))])]);
    }))]) : _vm._e(), _c('tbody', { staticClass: "r-table__tbody" }, _vm._l(_vm.data, function (object, index) {
      return _c('tr', { key: index }, _vm._l(object, function (cell, index) {
        return _c('td', { key: index }, [_c('div', [_vm._v(_vm._s(cell))])]);
      }));
    }))])]);
  },

  name: 'RTable',
  props: ['data', 'headers', 'width', 'height', 'border'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},

  methods: {}
};