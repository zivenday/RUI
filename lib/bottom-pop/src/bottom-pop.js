'use strict';

exports.__esModule = true;

var _index = require('../../modal/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "r-zoom-pop" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.show, expression: "show" }], staticClass: "r-bottom-pop" }, [!!_vm.title ? _c('div', { staticClass: "r-bottom-pop__title" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _c('span', { staticClass: "r-bottom-pop__close", class: { 'is-toped': !!_vm.title }, on: { "click": _vm.handleClose } }, [_c('r-icon', { attrs: { "name": "cuowu1" } })], 1), _vm._t("default")], 2)]);
  },

  name: 'RBottomPop',
  componentName: 'RBottomPop',
  mixins: [_index2.default],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: [String, Number]
  },
  data: function data() {
    return {
      showDialog: false
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('update:show', false);
      this.$emit('close');
    }
  }
};