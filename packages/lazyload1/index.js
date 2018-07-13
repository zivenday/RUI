/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-07-04 12:00:52 
 * @Last Modified by:   zhongw@corp.21cn.com 
 * @Last Modified time: 2018-07-04 12:00:52 
 */
'use strict'
import directive from './src/directive';

export default {
  install(Vue) {
    Vue.use(directive)
  },
  directive
}