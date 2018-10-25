'use strict';

exports.__esModule = true;

var _asyncValidator = require('async-validator');

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _emitter = require('../../utils/mixin/emitter.js');

var _emitter2 = _interopRequireDefault(_emitter);

var _merge = require('../../utils/merge');

var _merge2 = _interopRequireDefault(_merge);

var _util = require('../../utils/util');

var _style = require('../../utils/mixin/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "r-form-item", class: [{
        'is-error': _vm.validateState === 'error',
        'is-success': _vm.validateState === 'success'
      }] }, [_c('div', { staticStyle: { "width": "100%" } }, [_vm.label ? _c('label', { style: { width: _vm.pxToview(_vm.labelWidth) } }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._t("default", null, { validateState: _vm.validateState, validateMessage: _vm.validateMessage })], 2), _vm.validateState === 'error' && _vm.defaultErrorTips ? _c('div', { staticClass: "r-form-item__error", style: { paddingLeft: _vm.pxToview(_vm.labelWidth + 10) } }, [_vm._v("\n    " + _vm._s(_vm.validateMessage) + "\n  ")]) : _vm._e()]);
  },

  name: 'RFormItem',
  componentName: 'RFormItem',
  inject: ['rForm'],
  props: {
    label: String,
    value: [String, Number],
    prop: [String, Number, Object],
    defaultErrorTips: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array]
  },
  mixins: [_emitter2.default, _style2.default],
  computed: {
    form: function form() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'RForm') {
        if (parentName === 'RFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },

    fieldValue: {
      cache: false,
      get: function get() {
        var model = this.form.model;
        if (!model || !this.prop) {
          return;
        }

        var path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }
        return (0, _util.getPropByPath)(model, path, true).v;
      }
    }
  },
  data: function data() {
    return {
      validateState: '',
      validateMessage: '',
      labelWidth: ''
    };
  },
  provide: function provide() {
    return {
      rFormItem: this
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.labelWidth = this.rForm ? this.rForm.labelWidth : '';

    this.dispatch('RForm', 'r.form.addField', [this]);
    this.$on('r.form.change', function (val) {
      _this.validate('change');
    });
  },

  methods: {
    resetForm: function resetForm() {},
    clearValidate: function clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
    },
    validate: function validate(trigger) {
      var _this2 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.noop;

      var rules = this.getFilteredRule(trigger);

      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback({ isValid: true });
        return true;
      }
      this.validateState = 'validating';
      var descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      var validator = new _asyncValidator2.default(descriptor);
      var model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, function (errors, fields) {
        if (errors) {
          _this2.validateState = 'error';
          _this2.validateMessage = errors[0].message;
          callback({ isValid: false, error: errors[0].message });
        } else {
          _this2.validateState = 'success';
          callback({ isValid: true });
        }
      });
    },
    getRules: function getRules() {
      var formRules = this.form.rules;
      var selfRules = this.rules;
      var requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      formRules = formRules ? (0, _util.getPropByPath)(formRules, this.prop || '').o[this.prop || ''] : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule: function getFilteredRule(trigger) {
      var rules = this.getRules();
      return rules.filter(function (rule) {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
      }).map(function (rule) {
        return (0, _merge2.default)({}, rule);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.dispatch('RForm', 'r.form.removeField', [this]);
  }
};