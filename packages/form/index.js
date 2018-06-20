/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import form from './src/form.vue';

form.install = function (Vue) {
  Vue.component(form.name, form);
};

export default form;
