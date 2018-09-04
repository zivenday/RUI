"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('r-bottom-pop', { staticClass: "r-simple-sku", attrs: { "show": _vm.current }, on: { "close": _vm.handleClose } }, [_c('div', { staticClass: "sku__info" }, [_c('div', { staticClass: "sku__info--show", style: _vm.style(_vm.currentIndex, _vm.srcKey) }), _c('div', { staticClass: "sku__info--detail" }, [_c('div', [_vm._v("￥" + _vm._s(_vm.packageList[_vm.currentIndex]["" + _vm.priceKey]))]), _c('div', [_vm._v("已选择：" + _vm._s(_vm.packageList[_vm.currentIndex]["" + _vm.nameKey]))])]), _c('div', { staticClass: "clear" })]), _c('div', { staticClass: "sku__choice" }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.packageList.length > 0, expression: "packageList.length>0" }], staticClass: "sku__package" }, [_c('div', [_c('div', [_vm._v("套餐")]), _c('div', _vm._l(_vm.packageList, function (item, index) {
      return _c('span', { key: index, class: { 'is-checked': _vm.currentIndex === index }, on: { "click": function click($event) {
            _vm.handleSkuClick(item, index);
          } } }, [_vm._v(_vm._s(item["" + _vm.nameKey]))]);
    }))])]), _c('div', { staticClass: "sku__num" }, [_c('div', [_vm._v("购买数量")]), _c('r-count-bar', { attrs: { "min": _vm.min, "max": _vm.max, "disabled": _vm.disabled, "disabledInput": _vm.disabledInput }, on: { "input": _vm.handleInput, "change": _vm.handleChange, "blur": _vm.handleBlur, "plus": _vm.handlePlus, "mins": _vm.handleMins }, model: { value: _vm.value, callback: function callback($$v) {
          _vm.value = $$v;
        }, expression: "value" } })], 1)]), _c('div', { staticClass: "sku__btn", class: _vm.disabledBuy ? 'is-disabled' : '', on: { "click": _vm.handleSubmit } }, [_vm._v("\n    " + _vm._s(_vm.disabledBuy ? '商品缺货' : '确定') + "\n  ")])]);
  },

  name: 'RSimpleSku',
  componentName: 'RSimpleSku',
  props: {
    srcKey: {
      type: String,
      default: 'src'
    },
    priceKey: {
      type: String,
      default: 'price'
    },
    nameKey: {
      type: String,
      default: 'name'
    },
    packageKey: {
      type: String,
      default: 'count'
    },
    show: {
      type: Boolean,
      default: false
    },
    packageList: {
      type: Array,
      default: function _default() {
        return [{ price: '100', src: '', alt: '商品', name: '默认名字' }];
      }
    },
    active: {
      type: Number,
      default: 0
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
    },

    packageList: {
      handler: function handler(List) {
        this.currentIndex = this.active;
        this.currentPackage = List[this.currentIndex];
        this.initMax(this.active);
      },
      deep: true
    },
    currentIndex: function currentIndex(val) {
      this.initMax(val);
    }
  },
  data: function data() {
    return {
      current: false,
      showDialog: false,
      currentIndex: 0,
      currentPackage: {},

      value: 1,
      min: 1,
      max: 100,
      disabledBuy: false
    };
  },
  mounted: function mounted() {},

  methods: {
    style: function style(index, key) {
      return {
        backgroundImage: ' url(' + this.packageList[index]["" + key] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      };
    },
    initMax: function initMax(currentIndex) {
      var max = this.packageList[currentIndex]["" + this.packageKey];
      this.max = max > 0 ? max : 1;
      this.disabledBuy = max <= 0;
    },
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

      if (this.currentPackage["" + this.packageKey] > 0) {
        var data = {
          count: this.value,
          sku: this.packageList[this.currentIndex]
        };
        this.handleClose();
        this.$nextTick(function () {
          _this.$emit('submit', data);
        });
      }
    },
    handleSkuClick: function handleSkuClick(item, index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.currentPackage = item;
        this.initMax(index);
        this.$emit('sku-change', item);
      }
    }
  }
};