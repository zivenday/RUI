/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-27 10:19:43
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-05 15:16:22
 */
<template>
<div class="r-page-navbar">
  <div class="r-page-navbar__table" @click="handleClick" :style="{height:pxToview(height)}">
    <a class="r-page-navbar__contents" :class="'r-page-navbar__contents--'+(arrow==='left'?'right':'left')">
      <slot></slot>
    </a>
    <a class="r-page-navbar__arrow" :class="[arrow?'r-page-navbar__arrow--'+arrow:'r-page-navbar__arrow--right']">
      <r-icon name="jiantou" :style="{width:pxToview(awidth),height:pxToview(aheight)}"></r-icon>
    </a>
  </div>
</div>
</template>
<script>
import StyleFun from '../../utils/mixin/style.js'
export default {
  name: 'RPageNavbar',
  componentName: 'RPageNavbar',
  mixins: [StyleFun],
  props: {
    arrow: String,
    height: {
      type: [Number, String],
      default: 60
    },
    awidth: {
      type: Number,
      default: 6.5
    },
    aheight: {
      type: Number,
      default: 11.5
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
