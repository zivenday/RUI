'use strict';

exports.__esModule = true;

var _tabBar = require('./tab-bar.vue');

var _tabBar2 = _interopRequireDefault(_tabBar);

var _resizeEvent = require('../../utils/resize-event');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function noop() {}
var firstUpperCase = function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
};

exports.default = {
  name: 'TabNav',

  components: {
    TabBar: _tabBar2.default
  },

  inject: ['rootTabs'],

  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: noop
    },
    onTabRemove: {
      type: Function,
      default: noop
    },
    type: String
  },

  data: function data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false
    };
  },

  computed: {
    navStyle: function navStyle() {
      var dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y';
      return {
        transform: 'translate' + dir + '(-' + this.navOffset + 'px)'
      };
    },
    sizeName: function sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
    }
  },

  methods: {
    scrollPrev: function scrollPrev() {
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (!currentOffset) return;

      var newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;

      this.navOffset = newOffset;
    },
    scrollNext: function scrollNext() {
      var navSize = this.$refs.nav['offset' + firstUpperCase(this.sizeName)];
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (navSize - currentOffset <= containerSize) return;

      var newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;

      this.navOffset = newOffset;
    },
    scrollToActiveTab: function scrollToActiveTab() {
      if (!this.scrollable) return;
      var nav = this.$refs.nav;
      var activeTab = this.$el.querySelector('.is-active');
      var navScroll = this.$refs.navScroll;
      var activeTabBounding = activeTab.getBoundingClientRect();
      var navScrollBounding = navScroll.getBoundingClientRect();
      var navBounding = nav.getBoundingClientRect();
      var currentOffset = this.navOffset;
      var newOffset = currentOffset;

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
      }
      if (navBounding.right < navScrollBounding.right) {
        newOffset = nav.offsetWidth - navScrollBounding.width;
      }
      this.navOffset = Math.max(newOffset, 0);
    },
    update: function update() {
      if (!this.$refs.nav) return;
      var sizeName = this.sizeName;
      var navSize = this.$refs.nav['offset' + firstUpperCase(sizeName)];
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(sizeName)];
      var currentOffset = this.navOffset;

      if (containerSize < navSize) {
        var _currentOffset = this.navOffset;
        this.scrollable = this.scrollable || {};
        this.scrollable.prev = _currentOffset;
        this.scrollable.next = _currentOffset + containerSize < navSize;
        if (navSize - _currentOffset < containerSize) {
          this.navOffset = navSize - containerSize;
        }
      } else {
        this.scrollable = false;
        if (currentOffset > 0) {
          this.navOffset = 0;
        }
      }
    },
    changeTab: function changeTab(e) {
      var keyCode = e.keyCode;
      var nextIndex = void 0;
      var currentIndex = void 0,
          tabList = void 0;
      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        tabList = e.currentTarget.querySelectorAll('[role=tab]');
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }
      if (keyCode === 37 || keyCode === 38) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus();
      tabList[nextIndex].click();
    },
    setFocus: function setFocus() {
      this.isFocus = true;
    },
    removeFocus: function removeFocus() {
      this.isFocus = false;
    }
  },

  updated: function updated() {
    this.update();
  },
  render: function render(h) {
    var _this = this;

    var type = this.type,
        panes = this.panes,
        editable = this.editable,
        onTabClick = this.onTabClick,
        onTabRemove = this.onTabRemove,
        navStyle = this.navStyle,
        scrollable = this.scrollable,
        scrollNext = this.scrollNext,
        scrollPrev = this.scrollPrev,
        changeTab = this.changeTab,
        setFocus = this.setFocus,
        removeFocus = this.removeFocus;

    var scrollBtn = scrollable ? [h('span', { 'class': ['r-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'], on: {
        'click': scrollPrev
      }
    }, [h('i', { 'class': 'el-icon-arrow-left' })]), h('span', { 'class': ['r-tabs__nav-next', scrollable.next ? '' : 'is-disabled'], on: {
        'click': scrollNext
      }
    }, [h('i', { 'class': 'el-icon-arrow-right' })])] : null;

    var tabs = this._l(panes, function (pane, index) {
      var _ref;

      var tabName = pane.name || pane.index || index;
      var closable = pane.isClosable || editable;

      pane.index = '' + index;

      var btnClose = closable ? h('span', { 'class': 'r-icon-close', on: {
          'click': function click(ev) {
            onTabRemove(pane, ev);
          }
        }
      }) : null;

      var tabLabelContent = pane.$slots.label || pane.label;
      var tabindex = pane.active ? 0 : -1;
      return h('div', {
        'class': (_ref = {
          'r-tabs__item': true
        }, _ref['is-' + _this.rootTabs.tabPosition] = true, _ref['is-active'] = pane.active, _ref['is-disabled'] = pane.disabled, _ref['is-closable'] = closable, _ref['is-focus'] = _this.isFocus, _ref),
        attrs: { id: 'tab-' + tabName,
          'aria-controls': 'pane-' + tabName,
          role: 'tab',
          'aria-selected': pane.active,

          tabindex: tabindex
        },
        ref: 'tabs', refInFor: true,
        on: {
          'focus': function focus() {
            setFocus();
          },
          'blur': function blur() {
            removeFocus();
          },
          'click': function click(ev) {
            removeFocus();onTabClick(pane, tabName, ev);
          },
          'keydown': function keydown(ev) {
            if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
              onTabRemove(pane, ev);
            }
          }
        }
      }, [tabLabelContent, btnClose]);
    });
    return h('div', { 'class': ['r-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', 'is-' + this.rootTabs.tabPosition] }, [scrollBtn, h('div', { 'class': ['r-tabs__nav-scroll'], ref: 'navScroll' }, [h('div', { 'class': 'r-tabs__nav', ref: 'nav', style: navStyle, attrs: { role: 'tablist' },
      on: {
        'keydown': changeTab
      }
    }, [!type ? h('tab-bar', {
      attrs: { tabs: panes }
    }) : null, tabs])])]);
  },
  mounted: function mounted() {
    (0, _resizeEvent.addResizeListener)(this.$el, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.update) (0, _resizeEvent.removeResizeListener)(this.$el, this.update);
  }
};