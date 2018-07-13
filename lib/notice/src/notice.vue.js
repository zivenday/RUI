"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showBox, expression: "showBox" }], staticClass: "r-notice" }, [_c('div', { staticClass: "r-notice__text" }, [_c('transition-group', { attrs: { "name": "r-zoom-in-bottom", "tag": "ul" } }, _vm._l(_vm.options.noticeList, function (notice, index) {
      return _c('li', { directives: [{ name: "show", rawName: "v-show", value: index === _vm.currentIndex, expression: "index===currentIndex" }], key: index, ref: "frame", refInFor: true }, [_c('span', { ref: "notice", refInFor: true, staticClass: "r-notice__text__span", style: _vm.contentStyle(index) }, [_vm._v(_vm._s(notice))])]);
    }))], 1), _c('span', { staticClass: "r-notice__close", on: { "click": _vm.handleClick } }, [_c('r-icon', { attrs: { "name": "cuowu1" } })], 1)])]);
  },

  name: 'RNotice',
  componentName: 'RNotice',
  data: function data() {
    return {
      currentIndex: 0,
      showBox: false,
      options: {
        noticeList: [],
        speed: 2000,
        scroll: 150,
        delay: 0 },
      num: 0,
      noticeWidth: [],
      frameWidth: 0,
      duration: 0,
      currentInterval: undefined,
      text: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.num = _this.options.noticeList.length - 1;
      _this.frameWidth = _this.$refs['frame'][0].getBoundingClientRect().width;
      var t = _this.setCurrentDuration();
      if (_this.num !== 0) {
        _this.currentInterval = setInterval(function () {
          _this.setCurrentIndex();
        }, t);
      }
    });
  },

  methods: {
    setCurrentIndex: function setCurrentIndex() {
      var _this2 = this;

      this.currentIndex = this.currentIndex === this.num ? 0 : ++this.currentIndex;
      clearInterval(this.currentInterval);
      this.duration = 0;
      this.$nextTick(function () {
        var t = _this2.setCurrentDuration();
        _this2.currentInterval = setInterval(function () {
          _this2.setCurrentIndex();
        }, t);
      });
    },
    setCurrentDuration: function setCurrentDuration() {
      var _w = this.getCurrentNoticeWidth();
      var _speed = this.options.speed;
      var _scroll = this.options.scroll;
      if (this.frameWidth >= _w) {
        return _speed < 1000 || !_speed ? 1000 : _speed;
      } else {
        this.duration = (_w + this.frameWidth) / _scroll;
        return this.duration * 1000;
      }
    },
    contentStyle: function contentStyle(index) {
      var _num = this.num;
      if (this.duration > 0 && index === this.currentIndex) {
        this.$refs['notice'][this.currentIndex].classList.add(_num ? 'is-scroll' : 'is-scroll--infinite');
        return { paddingLeft: this.frameWidth + 'px', animationDelay: this.options.delay + 's', animationDuration: this.duration + 's' };
      } else {
        return {};
      }
    },
    getCurrentNoticeWidth: function getCurrentNoticeWidth() {
      this.noticeWidth[this.currentIndex] = this.noticeWidth[this.currentIndex] ? this.noticeWidth[this.currentIndex] : this.$refs['notice'][this.currentIndex].getBoundingClientRect().width;
      return this.noticeWidth[this.currentIndex];
    },
    handleClick: function handleClick() {
      this.showBox = false;
      this.$emit('close');
    }
  }
};