'use strict';

exports.__esModule = true;
exports.MessageBox = exports.RCheckboxGroup = exports.RCheckboxButton = exports.RCheckbox = exports.RRadio = exports.RTabPane = exports.RTabs = exports.RIcon = exports.RDialog = exports.RTag = exports.RFormItem = exports.RForm = exports.RInput = exports.RTable = exports.RCashBulkGroup = exports.RCashBulk = exports.RLead = exports.RButton = exports.install = undefined;

var _index = require('../packages/button/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../packages/lead/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../packages/cash-bulk/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../packages/cash-bulk-group/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../packages/table/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../packages/input/index.js');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('../packages/form/index.js');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('../packages/form-item/index.js');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('../packages/message/index.js');

var _index18 = _interopRequireDefault(_index17);

var _index19 = require('../packages/button-group/index.js');

var _index20 = _interopRequireDefault(_index19);

var _index21 = require('../packages/tag/index.js');

var _index22 = _interopRequireDefault(_index21);

var _index23 = require('../packages/dialog/index.js');

var _index24 = _interopRequireDefault(_index23);

var _index25 = require('../packages/auto-complete/index.js');

var _index26 = _interopRequireDefault(_index25);

var _index27 = require('../packages/icon/index.js');

var _index28 = _interopRequireDefault(_index27);

var _index29 = require('../packages/tabs/index.js');

var _index30 = _interopRequireDefault(_index29);

var _index31 = require('../packages/tab-pane/index.js');

var _index32 = _interopRequireDefault(_index31);

var _index33 = require('../packages/radio/index.js');

var _index34 = _interopRequireDefault(_index33);

var _index35 = require('../packages/checkbox/index.js');

var _index36 = _interopRequireDefault(_index35);

var _index37 = require('../packages/checkbox-button/index.js');

var _index38 = _interopRequireDefault(_index37);

var _index39 = require('../packages/checkbox-group/index.js');

var _index40 = _interopRequireDefault(_index39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('viewport-units-buggyfill').init();


var components = [_index2.default, _index20.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index22.default, _index24.default, _index26.default, _index28.default, _index30.default, _index32.default, _index36.default, _index38.default, _index40.default, _index34.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  components.map(function (component) {
    Vue.component(component.name, component);
  });
  Vue.prototype.$alert = _index18.default.alert;
  Vue.prototype.$loading = _index18.default.loading;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.install = install;
exports.RButton = _index2.default;
exports.RLead = _index4.default;
exports.RCashBulk = _index6.default;
exports.RCashBulkGroup = _index8.default;
exports.RTable = _index10.default;
exports.RInput = _index12.default;
exports.RForm = _index14.default;
exports.RFormItem = _index16.default;
exports.RTag = _index22.default;
exports.RDialog = _index24.default;
exports.RIcon = _index28.default;
exports.RTabs = _index30.default;
exports.RTabPane = _index32.default;
exports.RRadio = _index34.default;
exports.RCheckbox = _index36.default;
exports.RCheckboxButton = _index38.default;
exports.RCheckboxGroup = _index40.default;
exports.MessageBox = _index18.default;
exports.default = {
  install: install
};