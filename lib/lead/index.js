/**
 * date: 2018/2/12
 * author: ziven
 * comments:
 */
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/extensions
import Lead from './src/lead.vue';

Lead.install = function (Vue) {
  Vue.component(Lead.name, Lead);
};

export default Lead;
