'use strict';

exports.__esModule = true;

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "r-radio", class: [_vm.border && _vm.radioSize ? 'r-radio--' + _vm.radioSize : '', { 'is-disabled': _vm.isDisabled }, { 'is-focus': _vm.focus }, { 'is-bordered': _vm.border }, { 'is-checked': _vm.model === _vm.label }], attrs: { "role": "radio", "aria-checked": _vm.model === _vm.label, "aria-disabled": _vm.isDisabled, "tabindex": _vm.tabIndex }, on: { "keydown": function keydown($event) {
                    if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, " ")) {
                        return null;
                    }$event.stopPropagation();$event.preventDefault();_vm.model = _vm.label;
                } } }, [_c('span', { staticClass: "r-radio__input", class: {
                'is-disabled': _vm.isDisabled,
                'is-checked': _vm.model === _vm.label
            } }, [_c('span', { staticClass: "r-radio__inner" }), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "r-radio__original", attrs: { "type": "radio", "name": _vm.name, "disabled": _vm.isDisabled, "tabindex": "-1" }, domProps: { "value": _vm.label, "checked": _vm._q(_vm.model, _vm.label) }, on: { "focus": function focus($event) {
                    _vm.focus = true;
                }, "blur": function blur($event) {
                    _vm.focus = false;
                }, "change": [function ($event) {
                    _vm.model = _vm.label;
                }, _vm.handleChange] } })]), _c('span', { staticClass: "r-radio__label" }, [_vm._t("default"), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
    },

    name: 'RRadio',
    mixins: [_emitter2.default],
    inject: {
        elFormItem: {
            default: ''
        }
    },
    componentName: 'RRadio',
    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        border: Boolean,
        size: String
    },
    data: function data() {
        return {
            focus: false
        };
    },

    computed: {
        isGroup: function isGroup() {
            var parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'RRadioGroup') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
            }
            return false;
        },

        model: {
            get: function get() {
                return this.isGroup ? this._radioGroup.value : this.value;
            },
            set: function set(val) {
                if (this.isGroup) {
                    this.dispatch('RRadioGroup', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        _elFormItemSize: function _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        radioSize: function radioSize() {
            var temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
        },
        isDisabled: function isDisabled() {
            return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
        },
        tabIndex: function tabIndex() {
            return !this.isDisabled ? this.isGroup ? this.model === this.label ? 0 : -1 : 0 : -1;
        }
    },

    methods: {
        handleChange: function handleChange() {
            var _this = this;

            this.$nextTick(function () {
                _this.$emit('change', _this.model);
                _this.isGroup && _this.dispatch('RRadioGroup', 'handleChange', _this.model);
            });
        }
    }
};