/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import cashBulkGroup from './src/cashBulk-group.vue';

cashBulkGroup.install = function (Vue) {
  Vue.component(cashBulkGroup.name, cashBulkGroup);
};

export default cashBulkGroup;
