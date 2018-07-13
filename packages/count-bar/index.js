/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-27 16:51:26 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-27 23:44:16
 */
'use strict'
import countBar from './src/count-bar.vue';
countBar.install = function (Vue) {
  Vue.component(countBar.name, countBar);
};

export default countBar;