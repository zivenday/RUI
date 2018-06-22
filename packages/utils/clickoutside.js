/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 16:15:35
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-22 15:38:46
 */

import Vue from 'vue'
import { on } from './dom'

const nodeList = []
const ctx = '@@clickoutsideContext'
const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)

let startClick
let seed = 0

!Vue.prototype.$isServer && on(document, 'mousedown', e => (startClick = e))

!Vue.prototype.$isServer && on(document, 'touchstart', e => (startClick = e))
!Vue.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
})
!Vue.prototype.$isServer && on(document, 'touchend', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
})

function createDocumentHandler (el, binding, vnode) {
  if (isMobile) {
    return function (touchstart = {}, touchend = {}) {
      if (!vnode ||
        !vnode.context ||
        !touchstart.target ||
        !touchend.target ||
        el.contains(touchstart.target) ||
        el.contains(touchend.target) ||
        el === touchstart.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(touchstart.target) ||
            vnode.context.popperElm.contains(touchend.target)))) return

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]()
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn()
      }
    }
  } else {
    return function (mouseup = {}, mousedown = {}) {
      if (!vnode ||
        !vnode.context ||
        !mouseup.target ||
        !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(mouseup.target) ||
            vnode.context.popperElm.contains(mousedown.target)))) return

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]()
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn()
      }
    }
  }
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind (el, binding, vnode) {
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },

  update (el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },

  unbind (el) {
    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  }
}
