'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-coupon", class: 'r-coupon--' + (_vm.active ? 'active' : 'failure') }, [_c('div', { staticClass: "r-coupon__header", class: _vm.active ? 'is-active' : 'is-failure' }, [_c('div', [_c('span', { staticClass: "header__cur" }, [_vm._v("￥")]), _c('span', { staticClass: "header__price" }, [_vm._v(_vm._s(_vm.value))]), _c('span', { staticClass: "header__name" }, [_vm._v("优惠券")])]), _c('div', { staticClass: "header__limit" }, [_vm._v(_vm._s(_vm.limit))]), _c('div', { staticClass: "header__validity" }, [_vm._v(_vm._s(_vm.validity))])]), _c('div', { staticClass: "r-coupon__footer", class: _vm.active ? 'is-active' : 'is-failure', attrs: { "align": "center" } }, [_vm.active ? _c('r-button', { attrs: { "type": "primary", "styles": _vm.buttonStyles }, on: { "click": _vm.handleClick } }, [_vm._v("立即领取")]) : _c('div')], 1)]);
  },

  name: 'RCoupon',
  componentName: 'RCoupon',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    limit: {
      type: String,
      default: ''
    },
    validity: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#fff'
    },
    buttonStyles: {
      type: Object,
      default: function _default() {
        return {
          width: '74px',
          height: '30px',
          backgroundImage: 'linear-gradient(90deg, #FF9D21 0%, #FD6B00 100%)',
          borderRadius: '100px',
          border: '0px',
          marginTop: 'calc(50% - 24px)',
          fontFamily: 'PingFangSC-Regular',
          fontSize: '14px',
          padding: 0
        };
      }
    },
    value: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    }
  },
  data: function data() {
    return {
      style: {
        background: 'green',
        baseSytles: {
          margin: '0 auto'
        }
      }
    };
  },
  mounted: function mounted() {},

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
};