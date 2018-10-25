/*
 * @Description: countIcon
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-10-10 12:12:55
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-10-10 12:13:39
 */
'use strict'
import countIcon from './src/count-icon.vue';
countIcon.install = function (Vue) {
  Vue.component(countIcon.name, countIcon);
};

export default countIcon;