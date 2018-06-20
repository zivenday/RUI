/**
* date: 2018/2/12
* author: ziven
* comments:
*/
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
