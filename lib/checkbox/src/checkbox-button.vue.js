'use strict';

exports.__esModule = true;

var _emitter = require('recharger/src/utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "r-checkbox-button", class: [_vm.size ? 'r-checkbox-button--' + _vm.size : '', { 'is-disabled': _vm.isDisabled }, { 'is-checked': _vm.isChecked }, { 'is-focus': _vm.focus }], attrs: { "role": "checkbox", "aria-checked": _vm.isChecked, "aria-disabled": _vm.isDisabled } }, [_vm.trueLabel || _vm.falseLabel ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "r-checkbox-button__original", attrs: { "type": "checkbox", "name": _vm.name, "disabled": _vm.isDisabled, "true-value": _vm.trueLabel, "false-value": _vm.falseLabel }, domProps: { "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueLabel) }, on: { "change": [function ($event) {
          var $$a = _vm.model,
              $$el = $event.target,
              $$c = $$el.checked ? _vm.trueLabel : _vm.falseLabel;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$el.checked) {
              $$i < 0 && (_vm.model = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.model = $$c;
          }
        }, _vm.handleChange], "focus": function focus($event) {
          _vm.focus = true;
        }, "blur": function blur($event) {
          _vm.focus = false;
        } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "r-checkbox-button__original", attrs: { "type": "checkbox", "name": _vm.name, "disabled": _vm.isDisabled }, domProps: { "value": _vm.label, "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model }, on: { "change": [function ($event) {
          var $$a = _vm.model,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = _vm.label,
                $$i = _vm._i($$a, $$v);if ($$el.checked) {
              $$i < 0 && (_vm.model = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.model = $$c;
          }
        }, _vm.handleChange], "focus": function focus($event) {
          _vm.focus = true;
        }, "blur": function blur($event) {
          _vm.focus = false;
        } } }), _vm.$slots.default || _vm.label ? _c('span', { staticClass: "r-checkbox-button__inner", style: _vm.isChecked ? _vm.activeStyle : null }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]);
  },

  name: 'RCheckboxButton',

  mixins: [_emitter2.default],

  inject: {
    rFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    model: {
      get: function get() {
        return this._checkboxGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this._checkboxGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('RCheckboxGroup', 'input', [val]);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    _checkboxGroup: function _checkboxGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'RCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._checkboxGroup.fill || '',
        borderColor: this._checkboxGroup.fill || '',
        color: this._checkboxGroup.textColor || '',
        'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill

      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._checkboxGroup.checkboxGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled: function isDisabled() {
      return this._checkboxGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
    }
  },
  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this._checkboxGroup) {
          _this.dispatch('RCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  }
};