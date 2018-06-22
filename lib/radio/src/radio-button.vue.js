'use strict';

exports.__esModule = true;

var _emitter = require('recharger/src/utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "r-radio-button", class: [_vm.size ? 'r-radio-button--' + _vm.size : '', { 'is-active': _vm.value === _vm.label }, { 'is-disabled': _vm.isDisabled }, { 'is-focus': _vm.focus }], attrs: { "role": "radio", "aria-checked": _vm.value === _vm.label, "aria-disabled": _vm.isDisabled, "tabindex": _vm.tabIndex }, on: { "keydown": function keydown($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, " ")) {
            return null;
          }$event.stopPropagation();$event.preventDefault();_vm.value = _vm.label;
        } } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.value, expression: "value" }], staticClass: "r-radio-button__orig-radio", attrs: { "type": "radio", "name": _vm.name, "disabled": _vm.isDisabled, "tabindex": "-1" }, domProps: { "value": _vm.label, "checked": _vm._q(_vm.value, _vm.label) }, on: { "change": [function ($event) {
          _vm.value = _vm.label;
        }, _vm.handleChange], "focus": function focus($event) {
          _vm.focus = true;
        }, "blur": function blur($event) {
          _vm.focus = false;
        } } }), _c('span', { staticClass: "r-radio-button__inner", style: _vm.value === _vm.label ? _vm.activeStyle : null }, [_vm._t("default"), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
  },

  name: 'RRadioButton',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data: function data() {
    return {
      focus: false
    };
  },

  computed: {
    value: {
      get: function get() {
        return this._radioGroup.value;
      },
      set: function set(value) {
        this._radioGroup.$emit('input', value);
      }
    },
    _radioGroup: function _radioGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'RRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? '-1px 0 0 0 ' + this._radioGroup.fill : '',
        color: this._radioGroup.textColor || ''
      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled: function isDisabled() {
      return this.disabled || this._radioGroup.disabled;
    },
    tabIndex: function tabIndex() {
      return !this.isDisabled ? this._radioGroup ? this.value === this.label ? 0 : -1 : 0 : -1;
    }
  },

  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.dispatch('RRadioGroup', 'handleChange', _this.value);
      });
    }
  }
};