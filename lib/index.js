'use strict';

exports.__esModule = true;
exports.RScrollFresh = exports.RSkuCard = exports.RProduct = exports.RRegionChoose = exports.RSimpleSku = exports.RBottomPop = exports.RAddressGrounp = exports.RAddress = exports.NoticeBox = exports.RCountBar = exports.RPayBottombar = exports.RPageNavbar = exports.MessageBox = exports.RCarouselItem = exports.RCarousel = exports.Lazyload = exports.RCheckboxGroup = exports.RCheckboxButton = exports.RCheckbox = exports.RRadio = exports.RTabPane = exports.RTabs = exports.RIcon = exports.RDialog = exports.RTag = exports.RFormItem = exports.RForm = exports.RInput = exports.RTable = exports.RCashBulkGroup = exports.RCashBulk = exports.RLead = exports.RButton = exports.install = undefined;

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _lead = require('./lead');

var _lead2 = _interopRequireDefault(_lead);

var _cashBulk = require('./cash-bulk');

var _cashBulk2 = _interopRequireDefault(_cashBulk);

var _cashBulkGroup = require('./cash-bulk-group');

var _cashBulkGroup2 = _interopRequireDefault(_cashBulkGroup);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _buttonGroup = require('./button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _autoComplete = require('./auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _tabPane = require('./tab-pane');

var _tabPane2 = _interopRequireDefault(_tabPane);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxButton = require('./checkbox-button');

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

var _checkboxGroup = require('./checkbox-group');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _lazyload = require('./lazyload');

var _lazyload2 = _interopRequireDefault(_lazyload);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _carouselItem = require('./carousel-item');

var _carouselItem2 = _interopRequireDefault(_carouselItem);

var _pageNavbar = require('./page-navbar');

var _pageNavbar2 = _interopRequireDefault(_pageNavbar);

var _payBottombar = require('./pay-bottombar');

var _payBottombar2 = _interopRequireDefault(_payBottombar);

var _countBar = require('./count-bar');

var _countBar2 = _interopRequireDefault(_countBar);

var _notice = require('./notice');

var _notice2 = _interopRequireDefault(_notice);

var _addressGroup = require('./address-group');

var _addressGroup2 = _interopRequireDefault(_addressGroup);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

var _bottomPop = require('./bottom-pop');

var _bottomPop2 = _interopRequireDefault(_bottomPop);

var _simpleSku = require('./simple-sku');

var _simpleSku2 = _interopRequireDefault(_simpleSku);

var _regionChoose = require('./region-choose');

var _regionChoose2 = _interopRequireDefault(_regionChoose);

var _product = require('./product');

var _product2 = _interopRequireDefault(_product);

var _skuCard = require('./sku-card');

var _skuCard2 = _interopRequireDefault(_skuCard);

var _scrollFresh = require('./scroll-fresh');

var _scrollFresh2 = _interopRequireDefault(_scrollFresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_button2.default, _buttonGroup2.default, _lead2.default, _cashBulk2.default, _cashBulkGroup2.default, _table2.default, _input2.default, _form2.default, _formItem2.default, _tag2.default, _dialog2.default, _autoComplete2.default, _icon2.default, _tabs2.default, _tabPane2.default, _checkbox2.default, _checkboxButton2.default, _checkboxGroup2.default, _radio2.default, _carousel2.default, _carouselItem2.default, _pageNavbar2.default, _payBottombar2.default, _countBar2.default, _address2.default, _addressGroup2.default, _bottomPop2.default, _simpleSku2.default, _regionChoose2.default, _product2.default, _skuCard2.default, _scrollFresh2.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  window.onload = function () {
    require('viewport-units-buggyfill').init({ hacks: window.viewportUnitsBuggyfillHacks });
  };
  components.map(function (component) {
    Vue.component(component.name, component);
  });
  Vue.use(_lazyload2.default);
  Vue.prototype.$alert = _message2.default.alert;
  Vue.prototype.$confirm = _message2.default.confirm;
  Vue.prototype.$loading = _message2.default.loading;
  Vue.prototype.$tips = _message2.default.tips;
  Vue.prototype.$waiting = _message2.default.waiting;
  Vue.prototype.$notice = _notice2.default.notice;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.install = install;
exports.RButton = _button2.default;
exports.RLead = _lead2.default;
exports.RCashBulk = _cashBulk2.default;
exports.RCashBulkGroup = _cashBulkGroup2.default;
exports.RTable = _table2.default;
exports.RInput = _input2.default;
exports.RForm = _form2.default;
exports.RFormItem = _formItem2.default;
exports.RTag = _tag2.default;
exports.RDialog = _dialog2.default;
exports.RIcon = _icon2.default;
exports.RTabs = _tabs2.default;
exports.RTabPane = _tabPane2.default;
exports.RRadio = _radio2.default;
exports.RCheckbox = _checkbox2.default;
exports.RCheckboxButton = _checkboxButton2.default;
exports.RCheckboxGroup = _checkboxGroup2.default;
exports.Lazyload = _lazyload2.default;
exports.RCarousel = _carousel2.default;
exports.RCarouselItem = _carouselItem2.default;
exports.MessageBox = _message2.default;
exports.RPageNavbar = _pageNavbar2.default;
exports.RPayBottombar = _payBottombar2.default;
exports.RCountBar = _countBar2.default;
exports.NoticeBox = _notice2.default;
exports.RAddress = _address2.default;
exports.RAddressGrounp = _addressGroup2.default;
exports.RBottomPop = _bottomPop2.default;
exports.RSimpleSku = _simpleSku2.default;
exports.RRegionChoose = _regionChoose2.default;
exports.RProduct = _product2.default;
exports.RSkuCard = _skuCard2.default;
exports.RScrollFresh = _scrollFresh2.default;
exports.default = {
  install: install
};