/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-28 17:41:09 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-06 14:34:39
 */

const helloword = () => import('./pages/HelloWorld.vue')
const test = () => import('./pages/test.vue')
const demoIndex = () => import('./pages/index.vue')
const inputs = () => import('./pages/inputs.vue')
const lazyload = () => import('./pages/lazyload.vue')
const carousel = () => import('./pages/carousel.vue')
const pageNavbar = () => import('./pages/page-navbar.vue')
const payBottombar = () => import('./pages/pay-bottombar.vue')
const countBar = () => import('./pages/count-bar.vue')
const notice = () => import('./pages/notice.vue')
const address = () => import('./pages/address.vue')
const bottomPop = () => import('./pages/bottom-pop.vue')
const simpleSku = () => import('./pages/simple-sku.vue')
const message = () => import('./pages/message.vue')
const regionChoose = () => import('./pages/region-choose.vue')
const product = () => import('./pages/product.vue')
const skuCard = () => import('./pages/sku-card.vue')

export default {
  'helloword': helloword,
  'demoIndex': demoIndex,
  'inputs': inputs,
  'lazyload': lazyload,
  'carousel': carousel,
  'page-navbar': pageNavbar,
  'pay-bottombar': payBottombar,
  'count-bar': countBar,
  'notice': notice,
  'address': address,
  'bottom-pop':bottomPop,
  'simple-sku':simpleSku,
  'message':message,
  'region-choose':regionChoose,
  'product':product,
  'sku-card':skuCard,
  'test': test
};