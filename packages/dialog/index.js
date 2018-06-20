/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import dialog from './src/dialog.vue';

dialog.install = function (Vue) {
  Vue.component(dialog.name, dialog);
};

export default dialog;
