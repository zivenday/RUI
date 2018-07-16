/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-04 14:45:44 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 15:49:05
 */

/* eslint-disable no-undef,semi,no-unused-vars,prefer-const,comma-dangle,import/newline-after-import,max-len,indent,arrow-body-style,object-shorthand,no-multi-spaces,no-param-reassign,dot-notation,comma-spacing,no-unused-expressions,keyword-spacing,space-in-parens,no-empty,key-spacing,consistent-return,no-else-return,padded-blocks,object-curly-spacing,no-lonely-if */
import Vue from 'vue'
// eslint-disable-next-line semi,import/newline-after-import
import MessageContainer from './message.vue'
// eslint-disable-next-line import/first
import merge from 'lodash/merge'
// eslint-disable-next-line import/first
const MessageConstructor = Vue.extend(MessageContainer);
let instance
// eslint-disable-next-line padded-blocks
let initInstance = (options) => {

  // eslint-disable-next-line no-var
  if (!instance) {
    instance = new MessageConstructor().$mount();
    document.body.appendChild(instance.$el);
  }
  document.body.classList.add('hidden-overflow')

  Vue.nextTick(() => {
    instance.showBox = true;
    instance.options = merge(instance.options, options)
    console.log(instance.options)
  });
}
const MessageBox = (options, callback) => {
  // console.log(options)
  if (options.callback || !callback) {
    callback = options.callback
  }
  initInstance(options);
}
MessageBox.alert = (options) => {
  if (options === undefined) {
    options = {
      title: 'Alert',
      message: '这是一条提示！'
    }
  }
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  setTimeout(() => {
    !!instance ? Vue.nextTick(() => {
      instance.showBox = false
    }) : ''
  }, 1500)

  return MessageBox(merge({
    title: options.title,
    message: options.message,
    $type: 'alert',
    iconShow: true,
    iconClass: 'cuowu',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options))
}
MessageBox.loading = (options) => {
  if (options !== false) { // 如果传入的不是false布尔值,则视为打开loading
    if (options === undefined) {
      options = {
        title: 'Loading',
        message: '正在加载！'
      }
    }
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    if (options.delay) {// 设置关闭时间
      setTimeout(() => {
        !!instance ? Vue.nextTick(() => {
          instance.showBox = false
        }) : ''
      }, options.delay)
    }
    return MessageBox(merge({
      title: options.title,
      message: options.message,
      $type: 'loading',
      iconShow: true,
      iconClass: 'jiazai',
      closeOnPressEscape: true,// 点击弹框外围消失
      closeOnClickModal: false
    }, options))
  } else {
    if (instance) {
      Vue.nextTick(() => {
        instance.showBox = false
      });
    }
  }

}
MessageBox.confirm = (options) => {
  return MessageBox(merge({
    title: options.title,
    message: options.message,
    $type: 'confirm',
    iconShow: false,
    iconClass: 'cuowu',
    closeOnPressEscape: false,// 点击弹框外围消失
    closeOnClickModal: false,
    hasModal: true,
    cancel: options.cancel,
    ensure: options.ensure
  }, options))
}

MessageBox.frame = (options) => {
  return MessageBox(merge({
    title: options.title,
    message: options.message,
    $type: 'frame',
    iconShow: false,
    iconClass: 'cuowu',
    closeOnPressEscape: false,// 点击弹框外围消失
    closeOnClickModal: false,
    hasModal: true,
    cancel: options.cancel,
    ensure: options.ensure
  }, options))
}
export default MessageBox;
export { MessageBox };
