'use strict';

exports.__esModule = true;

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "r-zoom-in-top" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showPopper, expression: "showPopper" }], staticClass: "r-auto-suggestion" }, [_vm._t("default")], 2)]);
  },

  name: 'RAutoSuggestion',
  componentName: 'RAutoSuggestion',
  mixins: [_emitter2.default],
  props: {
    showSuggestion: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showPopper: false
    };
  },
  created: function created() {
    var _this = this;

    this.$on('visible', function (val) {
      _this.showPopper = val;
    });
  },

  methods: {
    select: function select(item) {
      this.dispatch('RAutocomplete', 'item-click', item);
    }
  }
};