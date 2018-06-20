/**
* date: 2018/2/12
* author: ziven
* comments:
*/
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import AutoComplete from './src/auto-complete.vue';

AutoComplete.install = function (Vue) {
  Vue.component(AutoComplete.name, AutoComplete);
};

export default AutoComplete;
