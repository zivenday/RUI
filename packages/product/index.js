/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-05 11:37:50
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-05 18:21:57
 */
import product from './src/product.vue';

product.install = function (Vue) {
  Vue.component(product.name, product);
};

export default product;