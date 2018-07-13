'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-page-navbar" }, [_c('div', { staticClass: "r-page-navbar__table", style: { height: _vm.pxToview(_vm.height) }, on: { "click": _vm.handleClick } }, [_c('a', { staticClass: "r-page-navbar__contents", class: 'r-page-navbar__contents--' + (_vm.arrow === 'left' ? 'right' : 'left') }, [_vm._t("default")], 2), _c('a', { staticClass: "r-page-navbar__arrow", class: [_vm.arrow ? 'r-page-navbar__arrow--' + _vm.arrow : 'r-page-navbar__arrow--right'] }, [_c('r-icon', { style: { width: _vm.pxToview(_vm.awidth), height: _vm.pxToview(_vm.aheight) }, attrs: { "name": "jiantou" } })], 1)])]);
  },

  name: 'RPageNavbar',
  componentName: 'RPageNavbar',
  mixins: [_style2.default],
  props: {
    arrow: String,
    height: {
      type: [Number, String],
      default: 60
    },
    awidth: {
      type: Number,
      default: 6.5
    },
    aheight: {
      type: Number,
      default: 11.5
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  }
};