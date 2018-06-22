"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "msgbox-fade" }, on: { "before-enter": _vm.beforeEnter, "after-leave": _vm.afterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showBox, expression: "showBox" }], staticClass: "r-message-box" }, [_c('div', { staticClass: "r-message-box__mask", on: { "touchstart": _vm.showChange } }), _c('div', { staticClass: "r-message-box__body" }, [_vm.options.title ? _c('div', { staticClass: "r-message-box__title" }, [_vm._v(_vm._s(_vm.options.title))]) : _vm._e(), _vm.options.iconShow ? _c('div', { staticClass: "r-message-box__icon" }, [_c('r-icon', { attrs: { "name": _vm.options.iconClass } })], 1) : _vm._e(), _c('div', { staticClass: "r-message-box__content" }, [_vm._v(_vm._s(_vm.options.message))]), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'input', expression: "options.$type==='input'" }], staticClass: "r-message-box__input" }), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'alert' || _vm.options.$type === 'loading', expression: "options.$type==='alert'||options.$type==='loading'" }], staticClass: "r-message-box__btn" }), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'input' || _vm.options.$type === 'confirm', expression: "options.$type==='input'||options.$type==='confirm'" }], staticClass: "r-message-box__confirm" })])])]);
  },

  name: 'RMessage',
  data: function data() {
    return {
      showBox: false,
      defautIconClass: 'iconfont',
      options: {
        message: '',
        title: '',
        iconShow: false,
        iconClass: '',
        closeOnPressEscape: true
      }
    };
  },
  created: function created() {},

  methods: {
    showChange: function showChange() {
      this.closeOnPressEscape ? this.showBox = false : this.showBox = this.showBox;
    },

    beforeEnter: function beforeEnter(el) {
      console.log('准备进入');
    },
    enter: function enter(el, done) {
      console.log('进入');
    },
    afterEnter: function afterEnter(el) {
      console.log('进入之后');
    },
    leave: function leave(el, done) {
      console.log('离开');
    },
    afterLeave: function afterLeave(el) {
      document.body.classList.remove('hidden-overflow');
      console.log('离开之后');
    }
  }
};