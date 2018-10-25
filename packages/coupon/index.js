/*
 * @Description: 优惠券组件
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-10-09 11:48:32
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-10-09 11:49:30
 */

'use strict'
import coupon from './src/coupon.vue';
coupon.install = function (Vue) {
  Vue.component(coupon.name, coupon);
};

export default coupon;