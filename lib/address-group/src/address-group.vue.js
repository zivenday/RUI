"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-address-group" }, [_vm._t("default")], 2);
  },

  name: 'RAddressGroup',
  componentName: 'RAddressGroup',
  props: {
    value: Object
  },
  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  },
  data: function data() {
    return {};
  }
};