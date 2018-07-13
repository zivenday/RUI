'use strict';

exports.__esModule = true;
exports.NoticeBox = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _notice = require('./notice.vue');

var _notice2 = _interopRequireDefault(_notice);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoticeConstructor = _vue2.default.extend(_notice2.default);
var instance = void 0;

var initInstance = function initInstance(options) {
  if (!instance) {
    instance = new NoticeConstructor().$mount();
    document.body.appendChild(instance.$el);
  }
  _vue2.default.nextTick(function () {
    instance.showBox = true;
    console.log(instance);
    instance.options = (0, _merge2.default)(instance.options, options);
  });
};
var NoticeBox = function NoticeBox(options, callback) {
  if (options.callback || !callback) {
    callback = options.callback;
  }
  initInstance(options);
};
NoticeBox.notice = function (options) {
  if (Object.prototype.toString.call(options) === '[object Array]') {
    options = { noticeList: options };
  }if (Object.prototype.toString.call(options) === '[object String]') {
    options = { noticeList: [options] };
  }
  return NoticeBox((0, _merge2.default)({ noticeList: ['这是一条通知！'], speed: 3000 }, options));
};
exports.default = NoticeBox;
exports.NoticeBox = NoticeBox;