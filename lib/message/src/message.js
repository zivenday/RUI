'use strict';

exports.__esModule = true;
exports.MessageBox = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _message = require('./message.vue');

var _message2 = _interopRequireDefault(_message);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageConstructor = _vue2.default.extend(_message2.default);
var instance = void 0;

var initInstance = function initInstance(options) {
  if (!instance) {
    instance = new MessageConstructor().$mount();
    document.body.appendChild(instance.$el);
  }
  document.body.classList.add('hidden-overflow');

  _vue2.default.nextTick(function () {
    instance.showBox = true;
    instance.options = (0, _merge2.default)(instance.options, options);
    console.log(instance.options);
  });
};
var MessageBox = function MessageBox(options, callback) {
  if (options.callback || !callback) {
    callback = options.callback;
  }
  initInstance(options);
};
MessageBox.alert = function (options) {
  if (options === undefined) {
    options = {
      title: 'Alert',
      message: '这是一条提示！'
    };
  }
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  setTimeout(function () {
    !!instance ? _vue2.default.nextTick(function () {
      instance.showBox = false;
    }) : '';
  }, 1500);

  return MessageBox((0, _merge2.default)({
    title: options.title,
    message: options.message,
    $type: 'alert',
    iconShow: true,
    iconClass: 'cuowu',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};
MessageBox.loading = function (options) {
  if (options !== false) {
    if (options === undefined) {
      options = {
        title: 'Loading',
        message: '正在加载！'
      };
    }
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    if (options.delay) {
      setTimeout(function () {
        !!instance ? _vue2.default.nextTick(function () {
          instance.showBox = false;
        }) : '';
      }, options.delay);
    }
    return MessageBox((0, _merge2.default)({
      title: options.title,
      message: options.message,
      $type: 'loading',
      iconShow: true,
      iconClass: 'jiazai',
      closeOnPressEscape: true,
      closeOnClickModal: false
    }, options));
  } else {
    if (instance) {
      _vue2.default.nextTick(function () {
        instance.showBox = false;
      });
    }
  }
};
MessageBox.confirm = function (options) {
  return MessageBox((0, _merge2.default)({
    title: options.title,
    message: options.message,
    $type: 'confirm',
    iconShow: false,
    iconClass: 'cuowu',
    closeOnPressEscape: false,
    closeOnClickModal: false,
    hasModal: true,
    cancel: options.cancel,
    ensure: options.ensure
  }, options));
};

MessageBox.frame = function (options) {
  return MessageBox((0, _merge2.default)({
    title: options.title,
    message: options.message,
    $type: 'frame',
    iconShow: false,
    iconClass: 'cuowu',
    closeOnPressEscape: false,
    closeOnClickModal: false,
    hasModal: true,
    cancel: options.cancel,
    ensure: options.ensure
  }, options));
};
exports.default = MessageBox;
exports.MessageBox = MessageBox;