"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('r-bottom-pop', { staticClass: "r-simple-sku", attrs: { "show": _vm.current }, on: { "close": _vm.handleClose } }, [_c('div', { staticClass: "sku__info" }, [_c('div', { staticClass: "sku__info--show" }, [_c('img', { attrs: { "src": _vm.packageList[_vm.currentIndex].src, "alt": _vm.packageList[_vm.currentIndex].alt } })]), _c('div', { staticClass: "sku__info--detail" }, [_c('div', [_vm._v("￥" + _vm._s(_vm.packageList[_vm.currentIndex].price))]), _c('div', [_vm._v("已选择：" + _vm._s(_vm.packageList[_vm.currentIndex].name))])]), _c('div', { staticClass: "clear" })]), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.packageList.length > 1, expression: "packageList.length>1" }], staticClass: "sku__package" }, [_c('div', [_c('div', [_vm._v("套餐")]), _c('div', _vm._l(_vm.packageList, function (item, index) {
      return _c('span', { key: index, class: { 'is-checked': _vm.currentIndex === index }, on: { "click": function click($event) {
            _vm.handleSkuClick(index);
          } } }, [_vm._v(_vm._s(item.name))]);
    }))])]), _c('div', { staticClass: "sku__num" }, [_c('div', [_vm._v("购买数量")]), _c('r-count-bar', { attrs: { "min": _vm.min, "max": _vm.max, "disabled": _vm.disabled, "disabledInput": _vm.disabledInput }, on: { "input": _vm.handleInput, "change": _vm.handleChange, "blur": _vm.handleBlur, "plus": _vm.handlePlus, "mins": _vm.handleMins }, model: { value: _vm.value, callback: function callback($$v) {
          _vm.value = $$v;
        }, expression: "value" } })], 1), _c('div', { staticClass: "sku__btn", on: { "click": _vm.handleSubmit } }, [_vm._v("\n    确定\n  ")])]);
  },

  name: 'RSimpleSku',
  componentName: 'RSimpleSku',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    packageList: {
      type: Array,
      default: function _default() {
        return [{ price: '默认价格', src: '', alt: '商品', name: '默认名字' }, { price: '默认2', src: '111', alt: '商品1', name: '默认名字1' }];
      }
    },
    active: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    }

  },
  watch: {
    show: function show(val) {
      this.current = val;
    }
  },
  data: function data() {
    return {
      current: false,
      showDialog: false,
      currentIndex: 0,
      num: 0,
      value: 1
    };
  },
  mounted: function mounted() {
    this.value = this.count;
    this.num = this.packageList.length - 1;
    this.currentIndex = this.active > this.num || this.active < 0 ? 0 : this.active;
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('update:show', false);
      this.$emit('close');
    },
    handleChange: function handleChange(val) {
      this.value = val;
      this.$emit('change', val);
    },
    handleInput: function handleInput(val) {
      this.value = val;
      this.$emit('input', val);
    },
    handleBlur: function handleBlur(val) {
      this.value = val;
      this.$emit('blur', val);
    },
    handleMins: function handleMins(val) {
      this.value = val;
      this.$emit('mins', val);
    },
    handlePlus: function handlePlus(val) {
      this.value = val;
      this.$emit('plus', val);
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      console.log('>>>>>>>>>>');
      var data = {
        count: this.value,
        sku: this.packageList[this.currentIndex]
      };
      this.handleClose();
      this.$nextTick(function () {
        _this.$emit('submit', data);
      });
    },
    handleSkuClick: function handleSkuClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.$emit('sku-change', this.packageList[this.currentIndex]);
      }
    }
  }
};