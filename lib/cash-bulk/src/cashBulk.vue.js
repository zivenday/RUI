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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-cash-bulk", class: { 'is-active': (0, _stringify2.default)(_vm.value) === (0, _stringify2.default)(_vm.bulkInfo) }, attrs: { "role": "cash-bulk" }, on: { "click": _vm.handleTouchStart } }, [_c('div', { staticClass: "r-cash-bulk-year" }, [_vm._v(_vm._s(_vm.bulkInfo.duration))]), _c('div', { staticClass: "r-cash-bulk-rmb" }, [_vm._v(_vm._s(_vm.bulkInfo.spend))]), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.value, expression: "value" }], attrs: { "type": "radio" }, domProps: { "value": _vm.bulkInfo, "checked": _vm._q(_vm.value, _vm.bulkInfo) }, on: { "change": [function ($event) {
          _vm.value = _vm.bulkInfo;
        }, _vm.handleChange] } })]);
  },

  name: 'RCashBulk',
  mixins: [_emitter2.default],
  props: {
    bulkInfo: {}
  },
  data: function data() {
    return {
      props: {},
      duration: '',
      spend: '',
      isActive: false
    };
  },

  computed: {
    value: {
      set: function set() {},
      get: function get() {
        return this._cashBulkGroup.value;
      }
    },
    _cashBulkGroup: function _cashBulkGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'RCashBulkGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    }
  },
  mounted: function mounted() {},

  methods: {
    handleTouchStart: function handleTouchStart(evt) {
      console.log((0, _stringify2.default)(this.value) === (0, _stringify2.default)(this.bulkInfo));
      this._cashBulkGroup.$emit('input', this.bulkInfo);
      if ((0, _stringify2.default)(this.value) === (0, _stringify2.default)(this.bulkInfo)) {} else {
        this.handleChange();
      }
    },
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.dispatch('RCashBulkGroup', 'handleChange', _this.value);
      });
    }
  }
};