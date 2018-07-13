'use strict';

exports.__esModule = true;
exports.RSkuCard = exports.RProduct = exports.RRegionChoose = exports.RSimpleSku = exports.RBottomPop = exports.RAddressGrounp = exports.RAddress = exports.NoticeBox = exports.RCountBar = exports.RPayBottombar = exports.RPageNavbar = exports.MessageBox = exports.RCarouselItem = exports.RCarousel = exports.RLazyload = exports.RCheckboxGroup = exports.RCheckboxButton = exports.RCheckbox = exports.RRadio = exports.RTabPane = exports.RTabs = exports.RIcon = exports.RDialog = exports.RTag = exports.RFormItem = exports.RForm = exports.RInput = exports.RTable = exports.RCashBulkGroup = exports.RCashBulk = exports.RLead = exports.RButton = exports.install = undefined;

var _index = require('./button/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./lead/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./cash-bulk/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./cash-bulk-group/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./table/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('./input/index.js');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('./form/index.js');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('./form-item/index.js');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('./message/index.js');

var _index18 = _interopRequireDefault(_index17);

var _index19 = require('./button-group/index.js');

var _index20 = _interopRequireDefault(_index19);

var _index21 = require('./tag/index.js');

var _index22 = _interopRequireDefault(_index21);

var _index23 = require('./dialog/index.js');

var _index24 = _interopRequireDefault(_index23);

var _index25 = require('./auto-complete/index.js');

var _index26 = _interopRequireDefault(_index25);

var _index27 = require('./icon/index.js');

var _index28 = _interopRequireDefault(_index27);

var _index29 = require('./tabs/index.js');

var _index30 = _interopRequireDefault(_index29);

var _index31 = require('./tab-pane/index.js');

var _index32 = _interopRequireDefault(_index31);

var _index33 = require('./radio/index.js');

var _index34 = _interopRequireDefault(_index33);

var _index35 = require('./checkbox/index.js');

var _index36 = _interopRequireDefault(_index35);

var _index37 = require('./checkbox-button/index.js');

var _index38 = _interopRequireDefault(_index37);

var _index39 = require('./checkbox-group/index.js');

var _index40 = _interopRequireDefault(_index39);

var _index41 = require('./lazyload/index.js');

var _index42 = _interopRequireDefault(_index41);

var _index43 = require('./carousel/index.js');

var _index44 = _interopRequireDefault(_index43);

var _index45 = require('./carousel-item/index.js');

var _index46 = _interopRequireDefault(_index45);

var _index47 = require('./page-navbar/index.js');

var _index48 = _interopRequireDefault(_index47);

var _index49 = require('./pay-bottombar/index.js');

var _index50 = _interopRequireDefault(_index49);

var _index51 = require('./count-bar/index.js');

var _index52 = _interopRequireDefault(_index51);

var _index53 = require('./notice/index.js');

var _index54 = _interopRequireDefault(_index53);

var _index55 = require('./address-group/index.js');

var _index56 = _interopRequireDefault(_index55);

var _index57 = require('./address/index.js');

var _index58 = _interopRequireDefault(_index57);

var _index59 = require('./bottom-pop/index.js');

var _index60 = _interopRequireDefault(_index59);

var _index61 = require('./simple-sku/index.js');

var _index62 = _interopRequireDefault(_index61);

var _index63 = require('./region-choose/index.js');

var _index64 = _interopRequireDefault(_index63);

var _index65 = require('./product/index.js');

var _index66 = _interopRequireDefault(_index65);

var _index67 = require('./sku-card/index.js');

var _index68 = _interopRequireDefault(_index67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_index2.default, _index20.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index22.default, _index24.default, _index26.default, _index28.default, _index30.default, _index32.default, _index36.default, _index38.default, _index40.default, _index34.default, _index44.default, _index46.default, _index48.default, _index50.default, _index52.default, _index58.default, _index56.default, _index60.default, _index62.default, _index64.default, _index66.default, _index68.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  window.onload = function () {
    require('viewport-units-buggyfill').init({ hacks: window.viewportUnitsBuggyfillHacks });
  };
  components.map(function (component) {
    Vue.component(component.name, component);
  });
  Vue.prototype.$alert = _index18.default.alert;
  Vue.prototype.$confirm = _index18.default.confirm;
  Vue.prototype.$loading = _index18.default.loading;
  Vue.prototype.$notice = _index54.default.notice;
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
exports.RLazyload = _index42.default;
exports.RCarousel = _index44.default;
exports.RCarouselItem = _index46.default;
exports.MessageBox = _index18.default;
exports.RPageNavbar = _index48.default;
exports.RPayBottombar = _index50.default;
exports.RCountBar = _index52.default;
exports.NoticeBox = _index54.default;
exports.RAddress = _index58.default;
exports.RAddressGrounp = _index56.default;
exports.RBottomPop = _index60.default;
exports.RSimpleSku = _index62.default;
exports.RRegionChoose = _index64.default;
exports.RProduct = _index66.default;
exports.RSkuCard = _index68.default;
exports.default = {
  install: install
};