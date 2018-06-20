/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import formItem from './src/form-item.vue';

formItem.install = function (Vue) {
  Vue.component(formItem.name, formItem);
};

export default formItem;
