/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-07-01 14:24:21
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 15:17:19
 */
<template>
  <transition name="r-zoom-pop">
    <div class="r-bottom-pop" v-show="show" >
      <div class="r-bottom-pop__title" v-if="!!title">{{title}}</div>
      <span class="r-bottom-pop__close" :class="{'is-toped':!!title}" @click="handleClose">
        <r-icon name="cuowu1"></r-icon>
      </span>
      <slot/>
    </div>
  </transition>
</template>
<script>
import Popup from '../../modal/index.js'
export default {
  name: 'RBottomPop',
  componentName: 'RBottomPop',
  mixins: [Popup],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: [String, Number]
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>
