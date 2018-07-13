'use strict';

'use strct';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _modal2 = require('./modal.vue');

var _modal3 = _interopRequireDefault(_modal2);

var _context = require('./context.js');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  open: function open(vm, config) {
    console.log('>>>', _context2.default.stack.some(function (item) {
      return item.vm._uid === vm._uid;
    }), _context2.default);
    if (!_context2.default.stack.some(function (item) {
      return item.vm._uid === vm._uid;
    })) {
      console.log(_context2.default);
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      _context2.default.stack.push({ vm: vm, config: config, targetNode: targetNode });
      var modal = _context2.default.modal;

      if (!modal) {
        modal = new (_vue2.default.extend(_modal3.default))({
          el: document.createElement('div')
        });
        _context2.default.modal = modal;
      }
    } else {
      var index = _context2.default.stack.findIndex(function (item) {
        return item.vm._uid === vm._uid;
      });
      var top = _context2.default.stack.find(function (item) {
        return item.vm._uid === vm._uid;
      });
      _context2.default.stack.splice(index, 1);
      _context2.default.stack.push(top);
    }

    if (_context2.default.top) {
      var _context$top = _context2.default.top,
          _targetNode = _context$top.targetNode,
          _config = _context$top.config;
      var _modal = _context2.default.modal;

      _targetNode.appendChild(_modal.$el);
      (0, _assign2.default)(_modal, (0, _extends3.default)({}, _config, {
        visible: true
      }));
      document.body.classList.add('hidden-overflow');
    }
  },
  plusKey: function plusKey() {
    _context2.default.plusKey('id');
  },
  close: function close() {
    var stack = _context2.default.stack;

    if (stack.length) {
      var modal = _context2.default.modal;

      if (modal.$el.parentNode) {
        modal.visible = false;
        document.body.classList.remove('hidden-overflow');
      }
    }
  },
  clear: function clear() {
    var stack = _context2.default.stack;

    if (stack.length) {
      this.close();
      this.$nextTick(function () {
        stack.splice(stack.length - 1, 1);
      });
    }
  }
};