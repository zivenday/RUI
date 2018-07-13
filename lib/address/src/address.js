'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-address" }, [_c('div', { staticClass: "r-address__inner" }, [_c('div', { on: { "click": _vm.handleClick } }, [_c('r-icon', { class: { 'is-checked': _vm.checked }, attrs: { "name": _vm.checked ? 'xuanzhong1' : 'weixuanzhong1' } }), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.value, expression: "value" }], attrs: { "type": "radio" }, domProps: { "value": _vm.info, "checked": _vm._q(_vm.value, _vm.info) }, on: { "change": [function ($event) {
          _vm.value = _vm.info;
        }, _vm.handleChange] } })], 1), _c('div', { staticClass: "r-address__inner__info" }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.info.name))]), _c('span', [_vm._v(_vm._s(_vm.info.tel))])]), _c('div', { staticClass: "r-address__inner__info__addr", staticStyle: { "word-wrap": "break-word", "word-break": "normal" } }, [_vm._v(_vm._s(_vm.info.addr))])])]), _c('div', { staticClass: "r-address__bottom" }, [_c('div', { staticClass: "r-address__btn", on: { "click": function click($event) {
          _vm.handleDel(_vm.info);
        } } }, [_c('r-icon', { attrs: { "name": "shanchu" } }), _c('span', [_vm._v(" 删除")])], 1), _c('div', { staticClass: "r-address__btn", on: { "click": function click($event) {
          _vm.handleEdit(_vm.info);
        } } }, [_c('r-icon', { attrs: { "name": "bianji" } }), _c('span', [_vm._v(" 编辑")])], 1), _c('div', { staticClass: "clear" })])]);
  },

  name: 'RAddress',
  componentName: 'RAddress',
  mixins: [_emitter2.default],
  props: {
    info: Object
  },
  computed: {
    value: {
      get: function get() {
        return this._addressGroup ? this._addressGroup.value : this.info;
      },

      set: function set() {}
    },
    checked: function checked() {
      if (this._addressGroup) {
        return (0, _stringify2.default)(this.value) === (0, _stringify2.default)(this.info);
      }
    },
    _addressGroup: function _addressGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'RAddressGroup') {
          parent = parent.$parent;
        } else {
          console.log('????>>>>', parent);
          return parent;
        }
      }
      return false;
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    handleChange: function handleChange(val) {
      var _this = this;

      this.$nextTick(function () {
        _this.dispatch('RAddressGroup', 'handleChange', _this.value);
      });
    },
    handleClick: function handleClick() {
      if (this._addressGroup) {
        this._addressGroup.$emit('input', this.info);
      } else {
        this.$emit('input', this.info);
      }
    },
    handleDel: function handleDel(info) {
      this.$emit('del', info);
    },
    handleEdit: function handleEdit(info) {
      this.$emit('edit', info);
    }
  }
};