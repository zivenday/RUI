/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-27 10:19:40 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-27 10:20:49
 */
import pageNavbar from './src/page-navbar.vue';

pageNavbar.install = function (Vue) {
  Vue.component(pageNavbar.name, pageNavbar);
};

export default pageNavbar;