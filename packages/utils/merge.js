/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 16:26:51
 * @Last Modified by:   zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 16:26:51
 */
export default function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}
