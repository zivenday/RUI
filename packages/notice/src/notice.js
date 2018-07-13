/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-28 21:52:17 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-29 10:45:01
 */

import Vue from 'vue'
import NoticeContainer from './notice.vue'
import merge from 'lodash/merge'
const NoticeConstructor = Vue.extend(NoticeContainer);
let instance
// eslint-disable-next-line padded-blocks
let initInstance = (options) => {

  // eslint-disable-next-line no-var
  if (!instance) {
    instance = new NoticeConstructor().$mount();
    document.body.appendChild(instance.$el);
  }
  Vue.nextTick(() => {
    instance.showBox = true;
    console.log(instance)
    instance.options = merge(instance.options, options)
  });
}
const NoticeBox = (options, callback) => {
  // console.log(options)
  if (options.callback || !callback) {
    callback = options.callback
  }
  initInstance(options);
}
NoticeBox.notice = (options) => {
  if (Object.prototype.toString.call(options) === '[object Array]') {
    options = { noticeList: options }
  } if (Object.prototype.toString.call(options) === '[object String]') {
    options = { noticeList: [options] }
  }
  return NoticeBox(merge({ noticeList: ['这是一条通知！'], speed: 3000 }, options))
}
export default NoticeBox
export { NoticeBox }