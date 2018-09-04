'use strict';

exports.__esModule = true;

var _debounce = require('throttle-debounce/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _style = require('../../utils/mixin/style.js');

var _style2 = _interopRequireDefault(_style);

var _autoSuggestion = require('./auto-suggestion.vue');

var _autoSuggestion2 = _interopRequireDefault(_autoSuggestion);

var _emitter = require('../../utils/mixin/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _clickoutside = require('../../utils/clickoutside');

var _clickoutside2 = _interopRequireDefault(_clickoutside);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "clickoutside", rawName: "v-clickoutside", value: _vm.close, expression: "close" }], staticClass: "r-auto-complete" }, [_c('div', { staticClass: "r-auto-complete__inner", style: { width: _vm.getWidth(_vm.styles, _vm.width) } }, [_c('r-input', _vm._b({ attrs: { "type": "transparent" }, on: { "input": _vm.handleChange, "focus": _vm.handleFocus, "blur": _vm.handleBlur } }, 'r-input', _vm.$props, false))], 1), _c('r-auto-suggestion', { style: { marginTop: _vm.getHeight(_vm.styles, _vm.height) } }, [_c('ul', { style: { width: _vm.getWidth(_vm.styles, _vm.width) } }, _vm._l(_vm.suggestions, function (item, index) {
      return _c('li', { key: index, ref: "suggestion", refInFor: true, staticClass: "suggestion-item", on: { "click": function click($event) {
            _vm.selectItem(item);
          } } }, [_vm._v("\n        " + _vm._s(item[_vm.valueKey]) + "\n        ")]);
    }))])], 1);
  },

  name: 'RAutoComplete',
  componentName: 'RAutoComplete',
  directives: {
    Clickoutside: _clickoutside2.default
  },
  props: {
    width: [String, Number],
    height: [String, Number],
    styles: Object,
    placeholder: String,
    inputType: String,
    fetchSuggestions: Function,
    value: [String, Number],
    valueKey: {
      type: [String, Number],
      default: 'value'
    }
  },
  mixins: [_style2.default, _emitter2.default],
  data: function data() {
    return {
      focusActive: false,
      suggestions: [],
      hasSuggestion: false,
      doc: document,
      debouncedGetData: function debouncedGetData() {}
    };
  },

  computed: {
    dropState: function dropState() {
      return this.hasSuggestion && this.focusActive;
    }
  },
  watch: {
    dropState: function dropState(val) {
      this.isFocus = val;
      this.broadcast('RAutoSuggestion', 'visible', val);
      this.$emit('drop', val);
    },

    suggestions: {
      handler: function handler(val, oldVal) {
        this.hasSuggestion = val.length > 0 ? true : false;
      },
      deep: true
    }
  },
  components: {
    RAutoSuggestion: _autoSuggestion2.default
  },
  create: function create() {
    var _this = this;

    this.debouncedGetData = (0, _debounce2.default)(this.debounce, function (val) {
      _this.getData(val);
    });
  },
  mounted: function mounted() {

    this.getData('');
  },

  methods: {
    close: function close(e) {
      this.focusActive = false;
    },
    clickOn: function clickOn(event) {},
    getWidth: function getWidth(styles, width) {
      if (width) {
        return this.pxToview(width);
      } else if (styles) {
        return styles.width ? this.pxToview(styles.width) : '';
      } else {
        return '';
      }
    },
    getHeight: function getHeight(styles) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

      if (height) {
        return this.pxToview(height);
      } else if (styles) {
        return styles.height ? this.pxToview(styles.height) : '';
      } else {
        return '';
      }
    },
    getData: function getData(queryString) {
      var _this2 = this;

      this.fetchSuggestions(queryString, function (suggestions) {
        _this2.suggestions = suggestions;
      });
    },
    handleFocus: function handleFocus(value) {
      this.focusActive = true;
      this.$emit('focus');
      this.debouncedGetData(value);
    },
    handleChange: function handleChange(value) {
      this.$emit('input', value);

      this.getData(value);
    },
    handleBlur: function handleBlur(value) {
      this.isFocus = false;
      this.$emit('blur', value);
    },
    selectItem: function selectItem(item) {
      this.focusActive = false;
      console.log('选择了');
      this.$emit('input', item[this.valueKey]);
      this.$emit('select', item);
    }
  },
  beforeDestroy: function beforeDestroy() {}
};