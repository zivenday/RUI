/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-25 12:02:04 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-25 16:11:21
 */
'use strct'

import Vue from 'vue';
import { checkServerIdentity } from 'tls';


const _vh = window.innerHeight;
const imageLazyDirective = {}
const finishLoadImage = []
imageLazyDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;
  Vue.directive('lazy', {
    bind: addListener
  })
}
function addListener (el, binding, vnode) {
  window.addEventListener('scroll', function () {
    checkShow(el, binding, vnode)
  })
}
function checkShow (el, binding, vnode) {
  const _elh = el.getBoundingClientRect().top
  const _fail= vnode.data.attrs.fail
  const _wait=vnode.data.attrs.waiting

  if (_elh > _vh) {
    const current = finishLoadImage.find(e => e === binding.value)
    const img = new Image()
    console.log(img.onreadystatechange)
    if (current) {
      el.src = current
    } else {
      img.src = binding.value
      img.onload = () => {
        setTimeout(()=>{
          el.src = binding.value
        },4000)
      }
    }
    
    if (_wait) {
      if (!img.complete) {
        el.src = _wait
      }
    }
    if (_fail) {
     img.onerror=()=>{
       el.src=_fail
     }
    }
  }
}
export default imageLazyDirective