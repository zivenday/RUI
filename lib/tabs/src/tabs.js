'use strict';

exports.__esModule = true;

var _tabNav = require('./tab-nav.vue');

var _tabNav2 = _interopRequireDefault(_tabNav);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  name: 'RTabs',

  components: {
    TabNav: _tabNav2.default
  },

  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    }
  },

  provide: function provide() {
    return {
      rootTabs: this
    };
  },
  data: function data() {
    return {
      currentName: this.value || this.activeName,
      panes: []
    };
  },

  watch: {
    activeName: function activeName(value) {
      this.setCurrentName(value);
    },
    value: function value(_value) {
      this.setCurrentName(_value);
    },
    currentName: function currentName(value) {
      var _this = this;

      if (this.$refs.nav) {
        this.$nextTick(function (_) {
          _this.$refs.nav.scrollToActiveTab();
        });
      }
    }
  },

  methods: {
    handleTabClick: function handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit('tab-click', tab, event);
    },
    handleTabRemove: function handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit('edit', pane.name, 'remove');
      this.$emit('tab-remove', pane.name);
    },
    handleTabAdd: function handleTabAdd() {
      this.$emit('edit', null, 'add');
      this.$emit('tab-add');
    },
    setCurrentName: function setCurrentName(value) {
      this.currentName = value;
      this.$emit('input', value);
    },
    addPanes: function addPanes(item) {
      var index = this.$slots.default.filter(function (item) {
        return item.elm.nodeType === 1 && /\br-tab-pane\b/.test(item.elm.className);
      }).indexOf(item.$vnode);
      this.panes.splice(index, 0, item);
    },
    removePanes: function removePanes(item) {
      var panes = this.panes;
      var index = panes.indexOf(item);
      if (index > -1) {
        panes.splice(index, 1);
      }
    }
  },
  render: function render(h) {
    var _ref;

    var type = this.type,
        handleTabClick = this.handleTabClick,
        handleTabRemove = this.handleTabRemove,
        handleTabAdd = this.handleTabAdd,
        currentName = this.currentName,
        panes = this.panes,
        editable = this.editable,
        addable = this.addable,
        tabPosition = this.tabPosition;

    var newButton = editable || addable ? h('span', {
      'class': 'r-tabs__new-tab',
      on: {
        'click': handleTabAdd,
        'keydown': function keydown(ev) {
          if (ev.keyCode === 13) {
            handleTabAdd();
          }
        }
      },
      attrs: {
        tabindex: '0'
      }
    }, [h('i', { 'class': 'r-icon-plus' })]) : null;

    var navData = {
      props: {
        currentName: currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable: editable,
        type: type,
        panes: panes
      },
      ref: 'nav'
    };
    var header = h('div', { 'class': ['r-tabs__header', 'is-' + tabPosition] }, [newButton, h('tab-nav', navData)]);
    var panrs = h('div', { 'class': 'r-tabs__content' }, [this.$slots.default]);

    return h('div', { 'class': (_ref = {
        'r-tabs': true,
        'r-tabs--card': type === 'card'
      }, _ref['r-tabs--' + tabPosition] = true, _ref['r-tabs--border-card'] = type === 'border-card', _ref) }, [tabPosition !== 'bottom' ? [header, panrs] : [panrs, header]]);
  },
  created: function created() {
    if (!this.currentName) {
      this.setCurrentName('0');
    }
  }
};