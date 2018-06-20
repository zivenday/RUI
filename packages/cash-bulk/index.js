/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import cashBulk from './src/cashBulk.vue';

cashBulk.install = function (Vue) {
  Vue.component(cashBulk.name, cashBulk);
};

export default cashBulk;
