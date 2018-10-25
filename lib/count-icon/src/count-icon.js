"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-count-icon", on: { "click": _vm.handleClick } }, [_c('r-icon', { attrs: { "name": _vm.name, "styles": _vm.styles, "count": _vm.count } }, [_vm.count > 0 ? _c('div', { staticClass: "r-count-icon__badge", class: _vm.type === 'default' ? 'is-default' : 'is-hollow', style: _vm.badgeStyles }, [_vm._v("\n      " + _vm._s(_vm.count > 99 ? '99+' : _vm.count) + "\n    ")]) : _vm._e()])], 1);
  },

  name: 'RCountIcon',
  componentName: 'RCountIcon',
  props: {
    name: {
      type: String,
      default: 'shopping-cart'
    },
    styles: {
      type: Object
    },
    badgeStyles: Object,
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        if (value === 'default' || value === 'hollow') {
          return true;
        } else {
          return false;
        }
      }
    },
    count: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick() {
      this.$emit('click', this.count);
    }
  }
};