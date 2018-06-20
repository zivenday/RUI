/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import RInput from './src/input.vue';

RInput.install = function (Vue) {
  Vue.component(RInput.name, RInput);
};

export default RInput;
