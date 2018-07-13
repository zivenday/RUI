"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "msgbox-fade" }, on: { "before-enter": _vm.beforeEnter, "after-leave": _vm.afterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showBox, expression: "showBox" }], staticClass: "r-message-box", on: { "touchmove": function touchmove($event) {
          $event.preventDefault();$event.stopPropagation();
        } } }, [_c('div', { staticClass: "r-message-box__mask", class: { 'is-modal': _vm.options.hasModal }, on: { "touchstart": _vm.handleClose } }), _c('div', { staticClass: "r-message-box__body", class: { 'is-select': _vm.options.$type === 'input' || _vm.options.$type === 'confirm' } }, [_vm.options.title ? _c('div', { staticClass: "r-message-box__title" }, [_vm._v(_vm._s(_vm.options.title))]) : _vm._e(), _vm.options.iconShow ? _c('div', { staticClass: "r-message-box__icon" }, [_c('r-icon', { attrs: { "name": _vm.options.iconClass } })], 1) : _vm._e(), _c('div', { staticClass: "r-message-box__content", class: { 'is-select': _vm.options.$type === 'input' || _vm.options.$type === 'confirm' } }, [_vm._v(_vm._s(_vm.options.message))]), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'input', expression: "options.$type==='input'" }], staticClass: "r-message-box__input" }), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'alert' || _vm.options.$type === 'loading', expression: "options.$type==='alert'||options.$type==='loading'" }], staticClass: "r-message-box__btn" }), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.options.$type === 'input' || _vm.options.$type === 'confirm', expression: "options.$type==='input'||options.$type==='confirm'" }], staticClass: "r-message-box__confirm" }, [_c('a', { on: { "click": _vm.handleCancel } }, [_vm._v("取消")]), _c('a', { on: { "click": _vm.handleConfirm } }, [_vm._v("确定")])])])])]);
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
        hasModal: false,
        closeOnPressEscape: false,
        closeOnClickModal: false,
        cancel: undefined,
        ensure: undefined
      }
    };
  },
  created: function created() {},

  methods: {
    handleClose: function handleClose(e) {
      e.stopPropagation();

      this.options.closeOnClickModal ? this.showBox = false : this.showBox = this.showBox;
      this.$emit('close');
    },
    handleCancel: function handleCancel() {
      console.log(12312312, Object.prototype.toString.call(this.options.cancel));
      Object.prototype.toString.call(this.options.cancel) === '[object Function]' ? this.options.cancel() : undefined;
      this.$emit('cancel');
      this.$emit('close');
      this.showBox = false;
    },
    handleConfirm: function handleConfirm() {
      Object.prototype.toString.call(this.options.ensure) === '[object Function]' ? this.options.ensure() : undefined;
      this.$emit('ensure');
      this.$emit('close');
      this.showBox = false;
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