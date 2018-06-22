/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 15:51:58
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 16:53:59
 */

export default {
  methods: {
    /* px到view转化 */
    pxToview (val) {
      /* 获取样式对象的类型 */
      const type = Object.prototype.toString.call(val)
      /* 验证是否是像素值/^(\-|\+)?\d+(\.\d+)?px$/ */
      const reg = new RegExp(/^(-|\+)?\d+(\.\d+)?px$/)
      if (type === '[object Undefined]') {
        /* 没有则返回 */
        return val
      } else if (type === '[object String]' && !reg.test(val)) {
        /* 如果是字符串并且不是像素值 */
        return val
      } else if (type === '[object Object]') {
        /* Object */
        const o = val
        for (let key in o) {
          o[key] = this.pxToview(o[key])
        }
        return o
      } else if (type === '[object Number]' || reg.test(val)) {
        /* 如果是数字或者像素值 根据数字，像素值获取可运算的值 */
        const value = reg.test(val) ? val.split('px')[0] : val
        return 100 * value / 375 + 'vw'
      }
    }
  }
}
