"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "r-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "r-modal", on: { "touchmove": function touchmove($event) {
          $event.preventDefault();$event.stopPropagation();
        } } })]);
  },

  name: 'RModal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style: function style() {
      return (0, _extends3.default)({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
};