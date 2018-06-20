/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import ButtonGroup from './src/button-group.vue';

ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
