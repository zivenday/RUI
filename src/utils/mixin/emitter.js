/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-12 16:26:42
 * @Last Modified by:   zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 16:26:42
 */
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.componentName
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    dispatch: function (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast: function (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
