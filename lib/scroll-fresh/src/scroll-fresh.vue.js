'use strict';

exports.__esModule = true;

var _touch = require('../../utils/touch');

var _touch2 = _interopRequireDefault(_touch);

var _style = require('../../utils/mixin/style');

var _style2 = _interopRequireDefault(_style);

var _scroll = require('../../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-scroll-fresh", attrs: { "id": "r-scroll-fresh" }, on: { "touchstart": function touchstart($event) {
          _vm.onTouchStart($event);
        }, "touchmove": function touchmove($event) {
          _vm.onTouchMove($event);
        }, "touchend": function touchend($event) {
          _vm.onTouchEnd($event);
        } } }, [_c('section', { staticClass: "inner", style: _vm.pxToview(_vm.styles) }, [_c('header', { staticClass: "pull-refresh" }, [_vm._t("pull-refresh", [_vm.isTouch && _vm.deltaY > 0 && _vm.deltaY < 300 ? _c('span', { staticClass: "down-tip" }, [_vm._v(_vm._s(_vm.pullText))]) : _vm._e(), _vm.isTouch && _vm.deltaY > 300 && !_vm.loading ? _c('span', { staticClass: "down-tip" }, [_vm._v(_vm._s(_vm.loosenText))]) : _vm._e(), !_vm.isTouch && _vm.loading ? _c('span', { staticClass: "refresh-tip" }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])], 2), _vm._t("default"), _vm.showLoadMoreBar ? _c('footer', { staticClass: "load-more" }, [_vm._t("load-more", [_vm.noMore ? _c('span', [_vm._v(_vm._s(_vm.noMoreText))]) : _vm._e(), !_vm.noMore && _vm.loading ? _c('span', [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])], 2) : _vm._e()], 2)]);
  },

  name: 'RScrollFresh',
  mixins: [_touch2.default, _style2.default],
  props: {
    offset: {
      type: Number,
      default: 100 },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    dataList: {
      type: [Object, Array],
      default: function _default() {
        return [];
      },
      required: false
    },
    fetchMoreDistane: {
      type: Number,
      default: 200
    },
    noMore: {
      type: Boolean,
      default: false
    },
    showLoadMoreBar: {
      type: Boolean,
      default: true
    },
    pullText: {
      type: String,
      default: '继续下拉'
    },
    loosenText: {
      type: String,
      default: '松开刷新'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    noMoreText: {
      type: String,
      default: '暂无更多'
    },
    onRefresh: {
      type: Function,
      default: function _default() {},
      required: false
    },
    duration: {
      type: Number,
      default: 300
    },
    onInfinite: {
      type: Function,
      default: function _default() {},
      require: false
    }
  },
  computed: {
    styles: function styles() {
      return {
        transitionDuration: (!this.isTouch ? this.duration : 0) + 'ms',
        transform: 'translateY(' + this.top + 'px)'
      };
    }
  },
  data: function data() {
    return {
      top: 0,
      state: 0,
      startX: 0,
      startY: 0,
      isTouch: false,
      loading: false,
      downFlag: false };
  },
  mounted: function mounted() {
    this.refresh();
    document.getElementById('r-scroll-fresh').addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    document.getElementById('r-scroll-fresh') ? document.getElementById('r-scroll-fresh').removeEventListener('scroll') : undefined;
  },

  methods: {
    onTouchStart: function onTouchStart(e) {
      console.log(e);
      this.touchStart(e);
      this.startScroll = this.$el.scrollTop || 0;
      this.isTouch = true;
    },
    handleScroll: function handleScroll(ev) {
      var _t = ev.target;
      var scrollT = _scroll2.default.getScrollTop(_t);
      var scrollH = _scroll2.default.getVisibleHeight(_t);
      var elemH = _t.scrollHeight;
      var bottom = elemH - (scrollH + scrollT);

      if (bottom <= this.fetchMoreDistane && !this.noMore && !this.loading) {
        console.log('111111111');
        this.infinite();
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      console.log('>>>>>>', this.startScroll, e.targetTouches[0].pageY - this.startY - this.startScroll, this.deltaY);

      if (this.startScroll === 0 && this.deltaY > 0) {
        this.top = Math.pow(e.targetTouches[0].pageY - this.startY - this.startScroll, 0.8);
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      if (this.startScroll === 0 && this.deltaY >= 300) {
        this.refresh();
      } else if (this.startScroll === 0 && this.deltaY < 300 && this.deltaY > 0) {
        this.isTouch = false;
        this.top = 0;
      }
    },
    refresh: function refresh() {
      this.isTouch = false;
      this.loading = true;

      this.onRefresh(this.refreshDone);
    },
    refreshDone: function refreshDone() {
      this.top = 0;
      this.loading = false;
    },
    infinite: function infinite() {
      if (!this.noMore) {
        this.loading = true;
        this.onInfinite(this.infiniteDone);
      } else {
        this.downActive = true;
      }
    },
    infiniteDone: function infiniteDone() {
      this.loading = false;
    }
  }
};