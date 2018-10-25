'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

var _touch = require('../../utils/touch');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-carousel", style: { width: '100%', height: !_vm.isNullHight ? _vm.pxToview(_vm.height) : _vm.pxToview(_vm.itemHeight) } }, [_c('div', { ref: "items", staticClass: "r-carousel__items", style: _vm.pxToview(_vm.styles), on: { "touchstart": _vm.onTouchStart, "touchmove": _vm.onTouchMove, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd, "transitionend": _vm.onTransition } }, [_vm._t("default")], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.fields.length > 1, expression: "fields.length>1" }], staticClass: "r-carousel__dots" }, _vm._l(_vm.fields, function (item, index) {
      return _c('span', { key: index, class: { 'is-active': index === _vm.currentIndex } });
    }))]);
  },

  name: 'RCarousel',
  componentName: 'RCarousel',
  props: {
    width: { type: [String, Number], default: '100%' },
    height: {
      type: [String, Number],
      default: 0
    },
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
        width: this.allWidth,
        height: this.itemHeight,
        transitionDuration: (!this.isTouch ? this.duration : this.getTouchDuration()) + 'ms',
        transform: 'translateX(' + this.offset + 'px)'
      };
    },
    isNullHight: function isNullHight() {
      return this.pxToview(this.height) === '0vw';
    }
  },
  data: function data() {
    return {
      items: [],
      offset: 0,
      currentIndex: 0,
      all: 0,
      itemHeight: 0,
      itemWidth: 0,
      isTouch: false,
      speed: 0,
      recoverDuration: 0,
      moving: false,
      fields: [],
      allWidth: 0,
      count: 0
    };
  },
  created: function created() {
    var _this = this;

    this.$on('r.carousel.addField', function (field) {
      if (field) {
        _this.fields.push(field);
        _this.count = _this.fields.length;
        _this.allWidth = _this.itemWidth * _this.count + 'px';
        _this.currentIndex = 0;
        _this.$el ? _this.fetchSizeAction() : undefined;
      }
    });
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
    var _this2 = this;

    this.fetchSizeAction();
    window.onresize = function () {
      _this2.fetchSizeAction();
    };
    var self = this;
    window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', self.fetchSizeAction, false);
  },

  methods: {
    fetchSizeAction: function fetchSizeAction() {
      this.count = this.fields.length;
      var rect = this.$el.getBoundingClientRect();
      var width = rect.width;

      this.itemWidth = width;
      this.itemHeight = this.isNullHight ? width * 320 / 375 : this.height;
      this.speed = rect.width / this.duration;
      this.allWidth = this.itemWidth * this.count + 'px';
      if (this.autoPlay && this.count - 1 > 0) {
        clearInterval(this.interval);
        this.autoplay();
      }
    },
    getTouchDuration: function getTouchDuration() {
      if (this.moving) {
        return 0;
      } else {
        return 200;
      }
    },
    onTransition: function onTransition(ev) {
      this.$emit('change', this.currentIndex);
    },
    onTouchStart: function onTouchStart(ev) {
      this.isTouch = true;
      this.moving = false;
      clearInterval(this.interval);
      this.touchStart(ev);
    },
    onTouchMove: function onTouchMove(ev) {
      this.moving = true;
      this.touchMove(ev);
      if (this.offsetX < this.itemWidth) {
        this.transform();
      } else {}
    },
    onTouchCancel: function onTouchCancel(ev) {},
    onTouchEnd: function onTouchEnd(ev) {
      this.touchEnd(ev);
      var num = this.count - 1;
      this.moving = false;

      if (this.offsetX >= this.itemWidth / 2 || this.offsetT < 300) {
        if (this.deltaX > 0 && this.currentIndex !== 0) {
          this.offset = -(this.itemWidth * --this.currentIndex);
        } else if (this.deltaX < 0 && this.currentIndex !== num) {
          this.offset = -(this.itemWidth * ++this.currentIndex);
        } else {
          this.offset = -(this.itemWidth * this.currentIndex);
        }
      } else {
        this.offset = -(this.itemWidth * this.currentIndex);
      }
      clearInterval(this.interval);
      console.log('-------', this.currentIndex);
      if (this.autoPlay && this.count - 1 > 0) {
        this.autoplay();
      }
    },
    autoplay: function autoplay() {
      var _this3 = this;

      this.interval = setInterval(function () {
        _this3.isTouch = false;
        _this3.setCurrentIndex();
      }, this.delay * 1000);
    },
    setCurrentIndex: function setCurrentIndex() {
      var _this4 = this;

      this.transform();
      this.$nextTick(function () {
        clearInterval(_this4.interval);
        var t = _this4.duration + _this4.delay * 1000;
        _this4.interval = setInterval(function () {
          _this4.setCurrentIndex();
        }, t);
      });
    },
    transform: function transform() {
      var num = this.count - 1;
      if (!this.isTouch) {
        this.offset = this.currentIndex !== num ? -(this.itemWidth * (this.currentIndex + 1)) : 0;
      } else {
        this.offset = -(this.itemWidth * this.currentIndex) + this.deltaX;
      }
    }
  }
};