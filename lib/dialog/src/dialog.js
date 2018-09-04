"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "msgbox-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.show, expression: "show" }], staticClass: "r-dialog", class: { 'is-model': _vm.model } }, [_c('div', { staticClass: "r-dialog__inner" }, [_c('span', { staticClass: "iconfont r-icon-error r-dialog__close", on: { "click": _vm.handleClose } }), _vm._t("default")], 2)])]);
  },

  name: 'RDialog',
  data: function data() {
    return {
      showDialog: false
    };
  },

  watch: {},
  props: {
    model: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('update:show', false);
      this.$emit('close');
    }
  }
};