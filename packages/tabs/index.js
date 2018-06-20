import RTabs from './src/tabs.vue';

/* istanbul ignore next */
RTabs.install = function(Vue) {
  Vue.component(RTabs.name, RTabs);
};

export default RTabs;
