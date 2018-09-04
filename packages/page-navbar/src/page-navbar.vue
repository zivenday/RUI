/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-27 10:19:43
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-22 11:39:59
 */
<template>
  <div class="r-page-navbar">
    <div class="r-page-navbar__table" :class="'r-page-navbar__table--'+(arrow==='left'?'left':'right')" @click="handleClick" :style="{height:pxToview(height)}">
      <div class="r-page-navbar__arrow" :class="[arrow==='left'?'r-page-navbar__arrow--'+arrow:'r-page-navbar__arrow--right']">
        <r-icon name="jiantou" :style="{width:pxToview(awidth),height:pxToview(aheight)}"></r-icon>
      </div>
      <div class="r-page-navbar__contents" >
        <slot></slot>
      </div>
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
    height: [Number, String],
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
