'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('img', { ref: "picture", class: ['r-picture', { 'r-picture--block': _vm.hasDefaultBlock }], attrs: { "alt": _vm.alt, "src": _vm.currentSrc } });
  },

  data: function data() {
    return {
      currentSrc: '',
      afterLazyInterval: undefined
    };
  },

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: [String, Number],
      default: ''
    },
    afterLazy: {
      type: Boolean,
      default: false
    },
    afterLazyFunc: Function,
    hasDefaultBlock: {
      type: Boolean,
      default: false
    },
    loadingSrc: {
      type: String,
      default: ''
    },
    errorSrc: {
      type: String,
      default: ''
    }
  },
  created: function created() {
    this.afterLazyInterval = this.afterLazy ? setInterval(this.afterLazyAction, 100) : undefined;
  },
  mounted: function mounted() {},

  methods: {
    afterLazyAction: function afterLazyAction(cb) {
      var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var _viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (_scrollTop + _viewportSize - this.$el.offsetTop > 0) {
        this.currentSrc = this.src;
        clearInterval(this.afterLazyInterval);
        cb ? cb() : '';
      }
    }
  }
};