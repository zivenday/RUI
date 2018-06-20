'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-button-group", class: _vm.type ? 'r-button-group--' + _vm.type : '' }, [_vm._t("default")], 2);
  },

  name: "RButtonGroup",
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {},
  methods: {}
};