
'use strict';

exports.__esModule = true;

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _scroll = require('../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _event = require('../utils/event');

var _touch = require('../utils/touch');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_touch2.default],
  props: {
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: {
      handler: function handler(val) {
        val ? this.openModel() : this.closeModel();
      },
      immediate: true
    }
  },
  created: function created() {
    this._popupId = 'popup-' + _manager2.default.plusKey();
  },

  methods: {
    openModel: function openModel() {
      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);
        document.body.classList.add('hidden-overflow');
        _context2.default.lockCount++;
      }
      _manager2.default.open(this);
    },
    closeModel: function closeModel() {
      if (this.lockScroll) {
        _context2.default.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);

        document.body.classList.remove('hidden-overflow');
      }
      document.body.classList.remove('hidden-overflow');
      _manager2.default.close();
    },
    move: function move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = _scroll2.default.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;

      var status = '11';

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      if (status !== '11' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
};