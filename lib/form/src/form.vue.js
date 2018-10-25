"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('form', { staticClass: "r-form", attrs: { "rules": _vm.rules } }, [_vm._t("default")], 2);
  },

  name: 'RForm',
  componentName: 'RForm',
  props: {
    model: Object,
    rules: Object,
    labelWidth: Number
  },
  provide: function provide() {
    return {
      rForm: this
    };
  },
  data: function data() {
    return {
      fields: []
    };
  },
  created: function created() {
    var _this = this;

    this.$on('r.form.addField', function (field) {
      if (field) {
        _this.fields.push(field);
      }
    });
    this.$on('r.form.removeField', function (field) {
      if (field.prop) {
        _this.fields.splice(_this.fields.indexOf(field), 1);
      }
    });
  },

  watch: {
    rules: function rules() {
      this.validate();
    }
  },
  methods: {
    resetForm: function resetForm() {
      if (this.$model) {
        this.fields.forEach(function (field) {
          field.resetForm();
        });
      }
    },
    validate: function validate(callback) {
      var _this2 = this;

      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!');
        return;
      }

      var promise = void 0;

      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise(function (resolve, reject) {
          callback = function callback(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      var valid = { isValid: true };
      var count = 0;
      var errorlist = [];

      if (this.fields.length === 0 && callback) {
        callback(valid);
      }
      this.fields.forEach(function (field, index) {
        field.validate('', function (res) {
          if (!res.isValid) {
            errorlist.push(res);
            valid.errorlist = errorlist;
            valid.isValid = res.isValid;
          }
          if (typeof callback === 'function' && ++count === _this2.fields.length) {
            callback(valid);
          }
        });
      });

      if (promise) {
        return promise;
      }
    }
  }

};