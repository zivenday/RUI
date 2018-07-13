/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-10 17:38:47
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-11 02:25:25
 */
'use strct'
import Vue from 'vue'
import Modal from './modal.vue'
import context from './context.js'
export default {
  open (vm, config) {
    console.log('>>>', context.stack.some(item => item.vm._uid === vm._uid), context)
    if (!context.stack.some(item => item.vm._uid === vm._uid)) {
      console.log(context)
      const el = vm.$el
      const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      context.stack.push({ vm, config, targetNode })
      let { modal } = context
      if (!modal) {
        modal = new (Vue.extend(Modal))({
          el: document.createElement('div')
        })
        context.modal = modal
      }
      // modal.visible = true;
      // document.body.classList.add('hidden-overflow')
    } else {
      const index = context.stack.findIndex(item => item.vm._uid === vm._uid)
      const top = context.stack.find(item => item.vm._uid === vm._uid)
      context.stack.splice(index, 1)
      context.stack.push(top)
    }
    // console.log('sss', vm._uid === context.top.vm._uid)
    if (context.top) {
      const { targetNode, config } = context.top;
      let { modal } = context;
      targetNode.appendChild(modal.$el);
      Object.assign(modal, {
        // ...defaultConfig,
        ...config,
        visible: true
      });
      document.body.classList.add('hidden-overflow')
    }

  },
  plusKey () {
    context.plusKey('id')
  },

  close () {
    const { stack } = context;
    if (stack.length) {
      let { modal } = context
      if (modal.$el.parentNode) {
        modal.visible = false;
        document.body.classList.remove('hidden-overflow')
      }
    }
  },
  clear () {
    const { stack } = context;
    if (stack.length) {
      this.close()
      this.$nextTick(() => {
        stack.splice(stack.length - 1, 1)
      })
    }
  }
}