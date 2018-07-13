'use strict';

exports.__esModule = true;

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-carousel-item", style: [{ width: _vm.width, height: _vm.height }] }, [_vm._t("default")], 2);
  },

  name: 'RCarouselItem',
  componentName: 'RCarouselItem',
  mixins: [_style2.default],
  inject: ['rCarousel'],
  computed: {
    carousel: function carousel() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'RCarousel') {
        if (parentName === 'RCarouselItem') {}
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    }
  },
  data: function data() {
    return {
      width: '',
      height: ''
    };
  },
  mounted: function mounted() {
    var rect = this.carousel.$el;
    this.height = rect.offsetHeight + 'px';
    this.width = rect.offsetWidth + 'px';
  }
};