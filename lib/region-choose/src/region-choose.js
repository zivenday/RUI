'use strict';

exports.__esModule = true;

var _provinces_cn = require('./city/provinces_cn.json');

var _provinces_cn2 = _interopRequireDefault(_provinces_cn);

var _cities_cn = require('./city/cities_cn.json');

var _cities_cn2 = _interopRequireDefault(_cities_cn);

var _areas_cn = require('./city/areas_cn.json');

var _areas_cn2 = _interopRequireDefault(_areas_cn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('r-bottom-pop', { attrs: { "show": _vm.current, "title": _vm.title }, on: { "close": _vm.handleClose } }, [_c('div', { staticClass: "r-region-choose" }, [_c('div', { staticClass: "r-region-choose__tab" }, [_c('r-tabs', { on: { "tab-click": _vm.handleClick }, model: { value: _vm.activeName, callback: function callback($$v) {
          _vm.activeName = $$v;
        }, expression: "activeName" } }, _vm._l(_vm.tabInfoList, function (tabInfo, index) {
      return _c('r-tab-pane', { key: index, attrs: { "label": tabInfo.label, "name": tabInfo.name } }, [_c('div', { staticClass: "r-region-choose__list" }, _vm._l(tabInfo.spaceList, function (space) {
        return _c('li', { key: space.name, staticClass: "r-region-choose__space", class: { 'is-choose': tabInfo.label === space.name }, on: { "click": function click($event) {
              _vm.handleChoose(tabInfo, space);
            } } }, [_vm._v(_vm._s(space.name))]);
      }))]);
    }))], 1)])]);
  },

  name: 'RRegionChoose',
  componentName: 'RRegionChoose',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: '配送至'
    }
  },
  watch: {
    show: function show(val) {
      this.current = val;
    }
  },
  data: function data() {
    return {
      current: false,
      region: [],
      tabInfoList: [{
        label: '请选择',
        name: '1',
        spaceList: []
      }],
      activeName: '1'
    };
  },
  mounted: function mounted() {
    this.tabInfoList[0].spaceList = _provinces_cn2.default;
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('update:show', false);
      this.$emit('close', false);
    },
    handleClick: function handleClick() {
      var length = this.tabInfoList.length;
      var start = parseInt(this.activeName);
      this.tabInfoList.splice(start, length - start);
    },
    handleChoose: function handleChoose(tab, space) {
      tab.label = space.name;
      var newTab = {};
      console.log(tab);
      if (tab.name === '3') {
        this.confirmAction();
      } else {
        newTab = this.prepareTab(tab.name, space.code);
        this.addTab(newTab);
      }
    },
    prepareTab: function prepareTab(name, code) {
      var tabInfo = {};
      var next = name === '1' ? _cities_cn2.default : _areas_cn2.default;
      next = next.filter(function (e) {
        return e.parent_code === code;
      });
      if (next.length === 1 && name === '1') {
        next = _areas_cn2.default.filter(function (e) {
          return e.parent_code === next[0].code;
        });
        tabInfo.name = '3';
      } else if (name === '2') {
        tabInfo.name = '3';
      } else {
        tabInfo.name = '2';
      }
      tabInfo.label = '请选择';
      tabInfo.spaceList = next;
      return tabInfo;
    },
    addTab: function addTab(tab) {
      this.tabInfoList.push(tab);
      this.activeName = tab.name;
    },
    confirmAction: function confirmAction() {
      this.$emit('confirm', this.tabInfoList.map(function (e) {
        return e.label;
      }));
      this.handleClose();
    }
  }
};