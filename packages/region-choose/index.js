/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-07-02 16:45:22 
 * @Last Modified by:   zhongw@corp.21cn.com 
 * @Last Modified time: 2018-07-02 16:45:22 
 */
import regionChoose from './src/region-choose.vue';

regionChoose.install = function (Vue) {
  Vue.component(regionChoose.name, regionChoose);
};

export default regionChoose;