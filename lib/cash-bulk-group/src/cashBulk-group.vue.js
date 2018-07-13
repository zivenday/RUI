"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-cash-bulk-group" }, [_vm._t("default")], 2);
  },

  name: 'RCashBulkGroup',
  componentName: 'RCashBulkGroup',
  props: {
    value: {}
  },
  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  },
  mounted: function mounted() {
    var radios = this.$el.querySelectorAll('[type=radio]');
    var firstLabel = this.$el.querySelectorAll('[type=radio]')[0];
    if (![].some.call(radios, function (radio) {
      return radio.checked;
    }) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  }
};