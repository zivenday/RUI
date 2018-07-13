/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-06 10:36:08
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-06 10:36:08
 */
import skuCard from './src/sku-card.vue';

skuCard.install = function (Vue) {
  Vue.component(skuCard.name, skuCard);
};

export default skuCard;
