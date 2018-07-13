'use strict';

exports.__esModule = true;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

var _touch = require('../../utils/touch');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-carousel", style: [{ width: _vm.pxToview(_vm.width), height: _vm.pxToview(_vm.height) }] }, [_c('div', { ref: "items", staticClass: "r-carousel__items", style: _vm.pxToview(_vm.styles), on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_vm._t("default")], 2), _c('div', { staticClass: "r-carousel__dots" }, _vm._l((0, _from2.default)(_vm.items), function (item, index) {
      return _c('span', { key: index, class: { 'is-active': index === _vm.currentIndex } });
    }))]);
  },

  name: 'RCarousel',
  componentName: 'RCarousel',
  props: {
    width: { type: [String, Number], default: '100%' },
    height: [String, Number],
    duration: {
      type: Number,
      default: 500
    },
    delay: {
      type: Number,
      default: 2
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mixins: [_style2.default, _touch2.default],
  computed: {
    styles: function styles() {
      return {
        width: this.all,
        transitionDuration: (!this.isTouch ? this.duration : this.getTouchDuration()) + 'ms',
        transform: 'translateX(' + this.offset + 'px)'
      };
    }
  },
  data: function data() {
    return {
      items: [],
      offset: 0,
      currentIndex: 0,
      all: 0,
      wh: 0,
      isTouch: false,
      speed: 0,
      isRecovey: false,
      recoverDuration: 0
    };
  },
  provide: function provide() {
    return {
      rCarousel: this
    };
  },

  watch: {
    offset: {
      handler: function handler(val, oldVal) {
        if (!this.isTouch && oldVal !== undefined) {
          this.currentIndex = this.currentIndex === this.count - 1 ? 0 : ++this.currentIndex;
        }
      },

      immediate: true
    }
  },
  mounted: function mounted() {
    this.items = this.$el.querySelectorAll('[class=r-carousel-item]');
    console.log(this.items);
    this.count = this.items.length;
    var rect = this.$el.getBoundingClientRect();
    this.wh = rect.width;
    this.speed = rect.width / this.duration;
    this.all = this.wh * this.count;
    if (this.autoPlay && this.count - 1 > 0) {
      this.autoplay();
    }
  },

  methods: {
    getTouchDuration: function getTouchDuration() {
      if (!this.isRecovey) {
        return 0;
      } else {
        return 200;
      }
    },
    onTouchStart: function onTouchStart(ev) {
      ev.stopPropagation();
      this.isTouch = true;
      clearInterval(this.interval);
      this.touchStart(ev);
    },
    onTouchMove: function onTouchMove(ev) {
      ev.stopPropagation();
      this.touchMove(ev);
      this.offsetX < this.wh ? this.transform() : undefined;
    },
    onTouchEnd: function onTouchEnd(ev) {
      ev.stopPropagation();
      var num = this.count - 1;
      this.isRecovey = true;
      if (this.offsetX >= this.wh / 2) {
        if (this.deltaX > 0 && this.currentIndex !== 0) {
          this.offset = -(this.wh * --this.currentIndex);
        } else if (this.deltaX < 0 && this.currentIndex !== num) {
          this.offset = -(this.wh * ++this.currentIndex);
        } else {
          this.offset = -(this.wh * this.currentIndex);
        }
      } else {
        this.offset = -(this.wh * this.currentIndex);
      }
      this.autoplay();
    },
    onTouchCancel: function onTouchCancel() {
      this.isTouch = false;
    },
    autoplay: function autoplay() {
      var _this = this;

      this.interval = setInterval(function () {
        console.log(111);
        _this.isTouch = false;
        _this.setCurrentIndex();
      }, this.delay * 1000);
    },
    setCurrentIndex: function setCurrentIndex() {
      var _this2 = this;

      this.transform();
      this.$nextTick(function () {
        clearInterval(_this2.interval);
        var t = _this2.duration + _this2.delay * 1000;
        _this2.interval = setInterval(function () {
          _this2.setCurrentIndex();
        }, t);
      });
    },
    transform: function transform() {
      var num = this.count - 1;
      if (!this.isTouch) {
        this.offset = this.currentIndex !== num ? -(this.wh * (this.currentIndex + 1)) : 0;
      } else {
        this.offset = -(this.wh * this.currentIndex) + this.deltaX;
      }
    }
  }
};