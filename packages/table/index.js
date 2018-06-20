/* eslint-disable import/no-unresolved */
/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import RTable from './src/table.vue';

RTable.install = function (Vue) {
  Vue.component(RTable.name, RTable);
};

export default RTable;
