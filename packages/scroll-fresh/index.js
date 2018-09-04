/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-27 09:53:58
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-27 09:53:58
 */
import scrollFresh from './src/scroll-fresh.vue';

scrollFresh.install = function (Vue) {
  Vue.component(scrollFresh.name, scrollFresh);
};

export default scrollFresh;