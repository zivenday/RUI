/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import RIcon from './src/icon.vue';

RIcon.install = function (Vue) {
  Vue.component(RIcon.name, RIcon);
};

export default RIcon;
