/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import RTag from './src/tag.vue';

RTag.install = function (Vue) {
  Vue.component(RTag.name, RTag);
};

export default RTag;
